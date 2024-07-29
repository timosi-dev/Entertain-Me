import { Link } from "react-router-dom"
import { FaStar  } from "react-icons/fa";


const ShowDetails = ({show}:{[key:string]:any}) => {

   const bgOverlay = `https://image.tmdb.org/t/p/original/${show.backdrop_path}`

   console.log(bgOverlay)

  return (
    <div className=" tracking-wide bg-slate-800 relative z-0">
      <div style={{backgroundImage: `url(${bgOverlay})`}}  className={`opacity-5 absolute w-full h-screen bg-cover bg-no-repeat top-0 left-0 z-10 bg-center`}></div>
      <div className="relative container p-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-40">
         <div className="pb-10">
            <Link className="inline-block px-5 py-3 bg-slate-900 text-white rounded-lg cursor-pointer transition-all hover:text-rose-300 border border-slate-900 hover:border-rose-300 font-semibold" to="/shows">
               Back To Shows</Link>
         </div>
         <div className="flex md:flex-row flex-col justify-between items-center gap-16 text-white">
            <div className="flex-none w-96">
               {
                  show.poster_path
                  ? <img
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  className="h-full rounded-lg"
                  alt={show.name}
               />
                  : <img
                  src="../public/No_image.jpg"
                  className="card-img-top"
                  alt={show.name}
               />
               }
            </div>
            <div className="leading-7 text-md mx-10 md:mx-0">
               <h2 className="font-bold uppercase text-2xl text-center mb-6">{show.name}</h2>
               <p>
                  <FaStar className="text-rose-300 inline mr-2" />
                   {show.vote_average.toFixed(1)} / 10
               </p>
               <p className="text-muted"><span className="text-rose-300 text-lg">Release Date: </span>{show.first_air_date} - {show.last_air_date}</p>
               <p className="my-4">
                  {show.overview}
               </p>
               <h5 className="text-rose-300 text-lg">Genres: </h5>
               <ul className="ml-10">
                  {show.genres.map((genre:{[key:string]:any}) => <li key={genre.name}>{genre.name}</li>)}
               </ul>
               <Link to={show.homepage} target="_blank" className="inline-block mt-10 px-5 py-3 bg-slate-900 text-white rounded-lg cursor-pointer transition-all hover:text-rose-300 border border-slate-900 hover:border-rose-300 font-semibold "> Visit Show Homepage</Link>
            </div>
         </div>

         <div className="details-bottom text-white leading-7 mt-10 tracking-wide mx-10 md:mx-0">
            <h2 className="font-bold uppercase text-2xl text-center mb-6">Show Info</h2>
            <ul>
               
               <li className="my-4 border-b pb-2 border-slate-700"><span className="text-rose-300 text-lg mr-2">Number of Seasons:</span> {show.number_of_seasons}</li>
               <li className="my-4 border-b pb-2 border-slate-700"><span className="text-rose-300 text-lg mr-2">Number of Episodes:</span> {show.number_of_episodes}</li>
               <li className="my-4 border-b pb-2 border-slate-700"><span className="text-rose-300 text-lg mr-2">Last Episode to Air:</span> {show.last_episode_to_air.name}</li>
               <li className="my-4 border-b pb-2 border-slate-700"><span className="text-rose-300 text-lg mr-2">Status:</span> {show.status}</li>
            </ul>
            <h4 className="text-lg">Production Companies:</h4>
            <div className="list-group">
               {show.production_companies.map((company:{[key:string]:any}) => <span>{company.name}. </span>)}
            </div>
         </div>
      </div>
    </div>
  )
}

export default ShowDetails