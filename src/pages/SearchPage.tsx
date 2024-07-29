import SearchListings from '../components/SearchListings';
import { FaSearch } from "react-icons/fa";

const SearchPage = () => {
  const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const searchTerm = urlParams.get('search-term');
   
  return (
    <>
    <section className="bg-slate-800">
        <div className="flex justify-center mx-auto p-14">
          <form action="/search" className="search-form">
            <div className="text-white flex gap-2">
              <input type="radio" id="movie" name="type" value="movie" checked readOnly/>
              <label htmlFor="movie">Movies</label>
              <input type="radio" id="tv" name="type" value="tv" className="ml-6"/>
              <label htmlFor="tv">TV Shows</label>
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
          <div id='noResults' className='hidden text-red-400 text-md pt-4 pl-8'>No Results Found</div>
          </form>
        </div>
      </section>

      <div className='px-2 md:px-10 bg-slate-800'>
        <div className ='bg-slate-800 '> 
          {searchTerm ?
          <> 
          <h2 className="text-center pt-6 text-2xl uppercase text-white">Search Results</h2>
            <div id="popular-movies" className="grid grid-cols-1 p-10 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SearchListings />              
            </div>
            </>  
            :
            <>
              <div id='alert' className='text-red-400 text-lg text-center -ml-32 -mt-8
              '>Please Enter a search term</div>
              <div className='h-screen'></div>
            </>
            
            }
        </div>
      </div>
    </>
  )
}

export default SearchPage