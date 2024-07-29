import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';
import Spinner from '../components/Spinner';


const MovieDetailsPage = () => {
  interface Data {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
 }

 const [loading, setLoading] = useState<boolean>(true)
 const [movie, setMovie] = useState<Data[]>([]);
 const { id } = useParams();
 const movieID = id?.slice(1)

 useEffect(() => {
    const API_KEY = process.env.API_KEY;
    const API_URL = process.env.API_URL;

    const fetchMovies = async () => {
       try {

          const endpoint = `movie/${movieID}`
          const response = await fetch (`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
          const data = await response.json();
          setMovie(data)
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
          <MovieDetails movie={movie}/>
        </>
      ) }
    </>
  )
}

export default MovieDetailsPage