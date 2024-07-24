import { Link } from "react-router-dom"

const MovieListing = ({movie}) => {

  return (
    <>
    <div className='bg-slate-800 shadow-2xl shadow-gray-900'>
      <Link to='/'>
        {
            movie.poster_path
            ? <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className=""
            alt={movie.title}
          />
             : <img
            src="images/no-image.jpg"
            className="card-img-top"
            alt={movie.title}
          />
            
        }
      </Link>
        <div className="card-body m-2 text-lg text-white ">
          <div className="flex justify-between">
            <small className="opacity-50">Rating: {movie.vote_average.toFixed(1)}</small>
            <small className="opacity-50">Year: {movie.release_date.slice(0,4)}</small>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieListing