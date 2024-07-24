import { Link } from "react-router-dom"

const ShowsListing = ({show}) => {
  return (
    <>
      <div className='bg-slate-800 shadow-2xl shadow-gray-900'>
      <Link to='/'>
        {
            show.poster_path
            ? <img
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            className=""
            alt={show.name}
          />
             : <img
            src="images/no-image.jpg"
            className="card-img-top"
            alt={show.name}
          />
            
        }
      </Link>
        <div className="card-body m-2 text-lg text-white ">
          <div className="flex justify-between">
            <small className="opacity-50">Rating: {show.vote_average.toFixed(1)}</small>
            <small className="opacity-50">Year: {show.first_air_date.slice(0,4)}</small>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowsListing