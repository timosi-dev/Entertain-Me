import EntertainListings from "../components/EntertainListings"

const EntertainPage = () => {

  return (
    <>
      <section className="bg-slate-800 mx-20 mt-10">
        <h1 className="text-center text-2xl uppercase font-demibold text-white">Advanced Filtering</h1>
        <form action="/entertain" className="search-form">
          <div className="text-white flex gap-2">
                <input type="radio" id="movie" name="type" value="movie" checked readOnly/>
                <label htmlFor="movie">Movies</label>
                <input type="radio" id="tv" name="type" value="tv" className="ml-6"/>
                <label htmlFor="tv">TV Shows</label>
          </div>
          <div className="mt-10">
            <div>
              <input type="checkbox" id="year" name="year"/>
              <label htmlFor="year">Year Range</label>
              <input type="number" id="minYear" name="minYear" min="1888" max="2050" placeholder="2000" defaultValue={2000}/>
              <input type="number" id="maxYear" name="maxYear" min="1888" max="2050" placeholder="2025" defaultValue={2025}/>
            </div>
            <button className=" rounded-lg bg-rose-200 h-12 w-24 flex justify-center items-center ml-6 hover:bg-rose-300" type="submit"> submit
              </button>
          </div>
        </form>
      </section>
      <section className='px-2 md:px-10 bg-slate-800'>
        <div className ='bg-slate-800 '> 
          <h2 className="text-center pt-6 text-2xl font-demibold text-white uppercase">Result</h2>
            <div id="popular-movies" className="grid grid-cols-2 p-10 gap-10 sm:grid-cols-2 md:grid-cols-3">
              <EntertainListings />
            </div>
        </div>
      </section>
        <div className="h-screen"></div>
    </>
  )
}

export default EntertainPage