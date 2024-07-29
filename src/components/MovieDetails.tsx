import { Link } from "react-router-dom"
import { FaStar  } from "react-icons/fa";


const MovieDetails = ({movie}:{[key:string]:any}) => {
   //add commas
   function addCommasToNumber(number:number):string {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }

   const bgOverlay = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`

   console.log(bgOverlay)

  return (
    <div className=" tracking-wide bg-slate-800 relative z-0">
      <div style={{backgroundImage: `url(${bgOverlay})`}}  className={`opacity-5 absolute w-full h-screen bg-cover bg-no-repeat top-0 left-0 z-10 bg-center`}></div>
      {/* <div className={`bg-[url('../public/No_image.jpg')] no-repeat cover h-screen w-full absolute top-0 left-0 z-10`}></div> */}
      <div className="relative container p-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-40">
         <div className="pb-10">
            <Link className="inline-block px-5 py-3 bg-slate-900 text-white rounded-lg cursor-pointer transition-all hover:text-rose-300 border border-slate-900 hover:border-rose-300 font-semibold" to="/">
               Back To Movies</Link>
         </div>
         <div className="flex md:flex-row flex-col justify-between items-center gap-16 text-white">
            <div className="flex-none w-96">
               {
                  movie.poster_path
                  ? <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="h-full rounded-lg"
                  alt={movie.title}
               />
                  : <img
                  src="../public/No_image.jpg"
                  className="card-img-top"
                  alt={movie.title}
               />
               }
            </div>
            <div className="leading-7 text-md mx-10 md:mx-0">
               <h2 className="font-bold uppercase text-2xl text-center mb-6">{movie.title}</h2>
               <p>
                  <FaStar className="text-rose-300 inline mr-2" />
                   {movie.vote_average.toFixed(1)} / 10
               </p>
               <p className="text-muted"><span className="text-rose-300 text-lg">Release Date: </span>{movie.release_date}</p>
               <p className="my-4">
                  {movie.overview}
               </p>
               <h5 className="text-rose-300 text-lg">Genres: </h5>
               <ul className="ml-10">
                  {movie.genres.map((genre:any) => <li key={genre.name}>{genre.name}</li>)}
               </ul>
               <Link to={movie.homepage} target="_blank" className="inline-block mt-10 px-5 py-3 bg-slate-900 text-white rounded-lg cursor-pointer transition-all hover:text-rose-300 border border-slate-900 hover:border-rose-300 font-semibold "> Visit Movie Homepage</Link>
            </div>
         </div>

         <div className="details-bottom text-white leading-7 mt-10 tracking-wide mx-10 md:mx-0">
            <h2 className="font-bold uppercase text-2xl text-center mb-6">Movie Info</h2>
            <ul>
               <li className="my-4 border-b pb-2 border-slate-700"><span className="text-rose-300 text-lg mr-2">Budget:</span> ${addCommasToNumber(movie.budget)}</li>
               <li className="my-4 border-b pb-2 border-slate-700"><span className="text-rose-300 text-lg mr-2">Revenue:</span> ${addCommasToNumber(movie.revenue)}</li>
               <li className="my-4 border-b pb-2 border-slate-700"><span className="text-rose-300 text-lg mr-2">Runtime:</span> {movie.runtime} minutes</li>
               <li className="my-4 border-b pb-2 border-slate-700"><span className="text-rose-300 text-lg mr-2">Status:</span> {movie.status}</li>
            </ul>
            <h4 className="text-lg">Production Companies:</h4>
            <div className="list-group">
               {movie.production_companies.map((company:any) => <span>{company.name}. </span>)}
            </div>
         </div>
      </div>
    </div>
  )
}

export default MovieDetails