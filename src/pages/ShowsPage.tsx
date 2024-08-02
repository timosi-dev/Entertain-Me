import ShowsListings from "../components/ShowsListings"

const ShowsPage = () => {
  return (
    <>
      <div className='px-2 md:px-10 bg-slate-800'>
      <div className ='bg-slate-800 '> 
        <h2 className="text-center pt-10 text-2xl uppercase font-demibold text-white">Popular Shows</h2>
          <div id="popular-movies" className="grid grid-cols-2 p-10 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ShowsListings />
          </div>
      </div>
    </div>
    </>
  )
}

export default ShowsPage