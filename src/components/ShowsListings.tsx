import ShowsListing from './ShowsListing'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'

const ShowsListings = () => {
   interface Data {
      id: number;
      poster_path: string;
      title: string;
      release_date: string;
      last_air_date : string; 
      first_air_date : string;
   }

   const [shows, setShows] = useState<Data[]>([]);
   const [loading, setLoading] = useState<boolean>(true)

   useEffect(() => {
      const API_KEY = process.env.API_KEY;
      const API_URL = process.env.API_URL;

      const fetchMovies = async () => {
         try {
            const endpoint = 'tv/popular'
            const response = await fetch (`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
            const data = await response.json();
            setShows(data.results)
         } catch(error) {
            console.log(error)
         }
         finally {
              setLoading(false)
            }
         }
         fetchMovies()         
   },[]);


      return (
         <>
             {loading ? (<Spinner loading={loading}/>) : (
               <>
                 { shows.map((show) => (
                     <ShowsListing show ={show} key ={show.id}/>
                  ))}
               </>
            ) }
         </>            
      )

}

export default ShowsListings