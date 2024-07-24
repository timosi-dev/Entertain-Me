import { Link } from "react-router-dom"

const MovieListing = ({movie}) => {

  return (
    <>
    <div className='bg-slate-800'>
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
        <div className="card-body m-2 text-lg text-white">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">
            <small className="text-muted">Release: {movie.release_date}</small>
          </p>
        </div>
      </div>
    </>
  )
}

export default MovieListing