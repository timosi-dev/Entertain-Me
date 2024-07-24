import MovieListings from "../components/MovieListings";


const MoviesPage = () => {

      // //Fetch data from TMDB API
      // const fetchAPIData = async (endpoint: string): Promise<T> => {
      //   const API_KEY = process.env.API_KEY;
      //   const API_URL = process.env.API_URL;
    
      //   //showSpinner();
    
      //   const response = await fetch (`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
      //   const data = await response.json();
    
      //   //hideSpinner();
      //   return data;
      // }

    
  return (
    <div className='px-2 md:px-10 bg-slate-800'>
      <div className ='bg-slate-800 '> 
        <h2 className="text-center pt-10 text-4xl font-demibold text-white">Popular Movies</h2>
          <div id="popular-movies" className="grid grid-cols-1 p-10 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <MovieListings />
          </div>
      </div>
    </div>
  )
}

export default MoviesPage