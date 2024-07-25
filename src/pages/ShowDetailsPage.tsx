import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ShowDetails from '../components/ShowDetails';
import Spinner from '../components/Spinner';


const ShowDetailsPage = () => {
  interface Data {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
 }

 const [loading, setLoading] = useState<boolean>(true)
 const [show, setShow] = useState<Data[]>([]);
 const { id } = useParams();
 const showID = id.slice(1)

 useEffect(() => {
    const API_KEY = process.env.API_KEY;
    const API_URL = process.env.API_URL;

    const fetchShows = async () => {
       try {

          const endpoint = `tv/${showID}`
          const response = await fetch (`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
          const data = await response.json();
          setShow(data)
       } catch(error) {
          console.log(error)
       }
       finally {
        setLoading(false)
          }
       }
       fetchShows()         
 },[]);


  return (
    <>
    {loading ? (<Spinner loading={loading}/>) : (
        <>
          <ShowDetails show={show}/>
        </>
      ) }
    </>
  )
}

export default ShowDetailsPage