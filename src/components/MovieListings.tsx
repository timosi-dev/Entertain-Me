import MovieListing from "./MovieListing"
import { useEffect, useState } from 'react'
import Spinner from './Spinner'

const MovieListings = () => {  

   interface Data {
      id: number;
      poster_path: string;
      title: string;
      release_date: string;
   }

   const [movies, setMovies] = useState<Data[]>([]);
   const [loading, setLoading] = useState<boolean>(true)

   useEffect(() => {
      const API_KEY = process.env.API_KEY;
      const API_URL = process.env.API_URL;

      const fetchMovies = async () => {
         try {
            const endpoint = 'movie/popular'
            const response = await fetch (`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
            const data = await response.json();
            setMovies(data.results)
         } catch(error) {
            console.log(error)
         }
         finally {
              setLoading(false)
            }
         }
         fetchMovies()         
   },[]);

      //console.log(movies)

      movies.forEach(movie => {
        // console.log(movie.id)
     })

      return (
         <>
             {loading ? (<Spinner loading={loading}/>) : (
               <>
                 { movies.map((movie) => (
                     <MovieListing movie ={movie} key ={movie.id}/>
                  ))}
               </>
            ) }
         </>            
      )

   }



export default MovieListings
