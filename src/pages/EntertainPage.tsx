import EntertainListings from "../components/EntertainListings"

const EntertainPage = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const type = urlParams.get('type');

  return (
    <>
      <section className="bg-slate-800 lg:mx-20 sm:mx-10 mx-4 mt-10 border border-rose-300 rounded-lg p-8">
        <h1 className="text-center md:text-2xl text-xl uppercase font-demibold text-white">Advanced Filtering</h1>
        <form action="/entertain" className="search-form flex flex-col space-y-8 mt-6 md:items-start items-center">
          {/* switch between movie and tv-shows  */}
          <div className="text-white flex gap-2 border border-rose-300 border-opacity-40 rounded-lg w-64 p-2 justify-center">
                <input type="radio" id="movie" name="type" value="movie" checked readOnly/>
                <label htmlFor="movie">Movies</label>
                <input type="radio" id="tv" name="type" value="tv" className="ml-6"/>
                <label htmlFor="tv">TV Shows</label>
          </div>
          <div className="w-full">
            {/* filtering values  */}
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
              {/* specifying year range  */}
              <div className="flex flex-col justify-center items-center space-y-4 p-6 border border-rose-300 rounded-md border-opacity-40">
                <div className="flex space-x-2 text-white">
                  <input type="checkbox" id="year" name="year"/>
                  <label htmlFor="year">Year Range</label>
                </div>
                <div className="flex space-x-6">
                  <input className="pl-1 py-1" type="number" id="minYear" name="minYear" min="1888" max="2050" placeholder="2000" defaultValue={1888}/>
                  <input className="pl-1 py-1" type="number" id="maxYear" name="maxYear" min="1888" max="2050" placeholder="2025" defaultValue={2030}/>
                </div>
              </div>
              {/* specifying rating range  */}
              <div className="flex flex-col justify-center items-center space-y-4 p-6 border border-rose-300 rounded-md border-opacity-40">
                <div className="flex space-x-2 text-white">
                  <input type="checkbox" id="rating" name="rating"/>
                  <label htmlFor="rating">Rating Range</label>
                </div>
                <div className="flex space-x-6">
                  <input className="pl-1 py-1" type="number" id="minRating" name="minRating" min="0" max="10" placeholder="0" defaultValue={0}/>
                  <input className="pl-1 py-1" type="number" id="maxRating" name="maxRating" min="0" max="10" placeholder="10" defaultValue={10}/>
                </div>
              </div>
              {/* Genres list  */}
              <fieldset className="md:col-span-2 text-white border border-rose-300 rounded-md border-opacity-40 p-2">
                <p>
                  Genres:
                </p>
                <ul className="flex justify-left flex-wrap space-x-2">
                  <li className="flex space-x-1 ml-2">
                    <input type="checkbox" id="action" name="action" value="Action" />
                    <label htmlFor="Action">Action</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="adventure" name="adventure" value="Adventure" />
                    <label htmlFor="Action">Adventure</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="animation" name="animation" value="Animation" />
                    <label htmlFor="Action">Animation</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="comedy" name="comedy" value="Comedy" />
                    <label htmlFor="Action">Comedy</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="crime" name="crime" value="Crime" />
                    <label htmlFor="Action">Crime</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="drama" name="drama" value="Drama" />
                    <label htmlFor="Action">Drama</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="documentary" name="documentary" value="Documentary" />
                    <label htmlFor="Action">Documentary</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="family" name="family" value="Family" />
                    <label htmlFor="Action">Family</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="fantasy" name="fantasy" value="Fantasy" />
                    <label htmlFor="Action">Fantasy</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="horror" name="horror" value="Horror" />
                    <label htmlFor="Action">Horror</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="mystery" name="mystery" value="Mystery" />
                    <label htmlFor="Action">Mystery</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="romance" name="romance" value="Romance" />
                    <label htmlFor="Action">Romance</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="science Fiction" name="science fiction" value="Science Fiction" />
                    <label htmlFor="Action">Science Fiction</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="thriller" name="thriller" value="Thriller" />
                    <label htmlFor="Action">Thriller</label>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" id="western" name="western" value="Western" />
                    <label htmlFor="Action">Western</label>
                  </li>
                </ul>
            </fieldset>
            </div>
          <div className="flex justify-between mt-10 md:mx-10 items-center space-x-2">
            <p className="text-white md:text-lg text-md">Get 3 Random Movies Based on your preferences: </p>
            <button className=" rounded-lg bg-rose-200 h-12 w-52 flex justify-center items-center  hover:bg-rose-300 font-bold" type="submit"> Surprise Me
            </button>
          </div>
          </div>
        </form>
      </section>
      <section className='px-2 md:px-10 bg-slate-800'>
        <div className ='bg-slate-800 '> 
          {/* <h2 className="text-center pt-6 text-2xl font-demibold text-white uppercase">Results</h2> */}
              { type 
              ?
                <EntertainListings />
              :
              <div className="h-[50vh]"></div>
              }
        </div>
      </section>
        
    </>
  )
}

export default EntertainPage