import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import MoviesPage from './pages/MoviesPage'
import ShowsPage from './pages/ShowsPage'
import EntertainPage from './pages/EntertainPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path ='/' element ={<MainLayout/>} >
      <Route index element = { <MoviesPage/> } />
      <Route path ='/shows' element = { <ShowsPage/> } />
      <Route path ='/entertain' element = { <EntertainPage/> } />
    </Route>
  )
  )

  return <RouterProvider  router={router} />
}

export default App
