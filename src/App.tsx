import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import MoviesPage from './pages/MoviesPage'
import ShowsPage from './pages/ShowsPage'
import EntertainPage from './pages/EntertainPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import ShowDetailsPage from './pages/ShowDetailsPage'
import SearchPage from './pages/SearchPage'


function App() {
  
  
  
  //  Fetch data from TMDB API
  const fetchAPIData = async (endpoint: string): Promise<T> => {
    const API_KEY = process.env.API_KEY;
    const API_URL = process.env.API_URL;

    //showSpinner();

    const response = await fetch (`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    //hideSpinner();
    return data;
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path ='/' element ={<MainLayout/>} >
      <Route index element = { <MoviesPage /> } />
      <Route path ='/:id' element = { <MovieDetailsPage /> } />
      <Route path ='/shows' element = { <ShowsPage /> } />
      <Route path ='/shows/:id' element = { <ShowDetailsPage /> } />
      <Route path ='/entertain' element = { <EntertainPage /> } />
      <Route path ='/search' element = { <SearchPage /> } />
    </Route>
  )
  )

  return <RouterProvider  router={router} />
}

export default App
