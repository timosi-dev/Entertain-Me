import EntertainListings from "../components/EntertainListings"

const EntertainPage = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const type = urlParams.get('type');

  return (
    <>
      <section className="bg-slate-800 mx-20 mt-10 border border-rose-300 rounded-lg p-8">
        <h1 className="text-center text-2xl uppercase font-demibold text-white">Advanced Filtering</h1>
        <form action="/entertain" className="search-form">
          {/* switch between movie and tv-shows  */}
          <div className="text-white flex gap-2 border border-rose-300 border-opacity-40 rounded-lg w-64 p-2 justify-center ">
                <input type="radio" id="movie" name="type" value="movie" checked readOnly/>
                <label htmlFor="movie">Movies</label>
                <input type="radio" id="tv" name="type" value="tv" className="ml-6"/>
                <label htmlFor="tv">TV Shows</label>
          </div>
          {/* filtering values  */}
          <div className="mt-10 grid grid-cols-4 gap-4">
            {/* specifying year range  */}
            <div className="flex flex-col justify-center items-center space-y-4 p-6 border border-rose-300 rounded-md border-opacity-40">
              <div className="flex space-x-2 text-white">
                <input type="checkbox" id="year" name="year"/>
                <label htmlFor="year">Year Range</label>
              </div>
              <div className="flex space-x-6">
                <input type="number" id="minYear" name="minYear" min="1888" max="2050" placeholder="2000" defaultValue={1888}/>
                <input type="number" id="maxYear" name="maxYear" min="1888" max="2050" placeholder="2025" defaultValue={2025}/>
              </div>
            </div>
            {/* specifying rating range  */}
            <div className="flex flex-col justify-center items-center space-y-4 p-6 border border-rose-300 rounded-md border-opacity-40">
              <div className="flex space-x-2 text-white">
                <input type="checkbox" id="year" name="year"/>
                <label htmlFor="year">Rating Range</label>
              </div>
              <div className="flex space-x-6">
                <input type="number" id="minRating" name="minRating" min="0" max="10" placeholder="0" defaultValue={0}/>
                <input type="number" id="maxRating" name="maxRating" min="0" max="10" placeholder="10" defaultValue={10}/>
              </div>
            </div>

          </div>
          <button className=" rounded-lg bg-rose-200 h-12 w-24 flex justify-center items-center ml-6 hover:bg-rose-300 mt-8" type="submit"> submit
          </button>
        </form>
      </section>
      <section className='px-2 md:px-10 bg-slate-800'>
        <div className ='bg-slate-800 '> 
          <h2 className="text-center pt-6 text-2xl font-demibold text-white uppercase">Result</h2>
              { type 
              ?
                <EntertainListings />
              :
              ''
              }
        </div>
      </section>
        <div className="h-screen"></div>
    </>
  )
}

export default EntertainPage