import MovieListings from "../components/MovieListings";
import { FaSearch } from "react-icons/fa";


const MoviesPage = () => {
    
  return (
    <>
      <section className="bg-slate-800">
        <div className="flex justify-center mx-auto p-14">
          {/* <div id="alert"></div> */}
          <form action="./search.html" className="search-form">
            <div className="text-white flex gap-2">
              <input type="radio" id="movie" name="type" value="movie" checked />
              <label htmlFor="movies">Movies</label>
              <input type="radio" id="tv" name="type" value="tv" className="ml-6"/>
              <label htmlFor="shows">TV Shows</label>
            </div>
            <div className="flex justify-between items-center mt-2">
              <input
                type="text"
                name="search-term"
                id="search-term"
                placeholder="Enter search term"
                className="sm:w-96 w-72 h-12  rounded-md border border-rose-200 bg-slate-800  focus:outline-none pl-4 text-white placeholder:text-sm"
              />
              <button className=" rounded-lg bg-rose-200 h-12 w-24 flex justify-center items-center ml-6 hover:bg-rose-300" type="submit">
                <FaSearch className=""/>
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className='px-2 md:px-10 bg-slate-800'>
        <div className ='bg-slate-800 '> 
          <h2 className="text-center pt-6 text-4xl font-demibold text-white">Popular Movies</h2>
            <div id="popular-movies" className="grid grid-cols-1 p-10 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <MovieListings />
            </div>
        </div>
      </div>
    </>
  )
}

export default MoviesPage