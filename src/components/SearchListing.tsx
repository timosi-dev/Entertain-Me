import { Link } from "react-router-dom"

const SearchListing = ({item, type}:{[key:string]:any}) => {
  return (
   <>
   <div className='bg-slate-800 shadow-2xl shadow-gray-900'>
     <Link to={`/:${item.id}`}>
       {
           item.poster_path
           ? <img
           src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
           className="rounded-md"
           alt={ type==='movie' ? item.title : item.name}
         />
            : <img
           src="No_image.jpg"
           className="card-img-top"
           alt={type==='movie' ? item.title : item.name}
         />
           
       }
     </Link>
       <div className="card-body m-2 text-lg text-white ">
         <div className="flex justify-between">
           <small className="opacity-50">Rating: {item.vote_average.toFixed(1)}</small>
           <small className="opacity-50">Year: {type==='movie' ? item.release_date.slice(0,4):
           item.first_air_date.slice(0,4) }</small>
         </div>
       </div>
     </div>
   </>
  )
}

export default SearchListing