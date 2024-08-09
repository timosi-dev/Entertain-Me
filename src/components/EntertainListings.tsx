import MovieListing from "./MovieListing";
import ShowsListing from "./ShowsListing";
import Spinner from './Spinner'
import { useEffect, useState } from 'react'

const EntertainListings = () => {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const searchType = urlParams.get('type');
   const minYear = urlParams.get('minYear');
   const maxYear = urlParams.get('maxYear');

   interface Data {
      id: number;
      poster_path: string;
      title: string;
      release_date: string;
   }

   const [loading, setLoading] = useState<boolean>(true)
   const [results, setResults] = useState<string[]>([]);

 
   let query ='';
   
   if (urlParams.get('year')) {
      query = query + `&primary_release_date.gte=${minYear}-01-01&primary_release_date.lte=${maxYear}-12-31`;
   }

   function randomNumber(total:number):number[] {
      let arr =[];
      while (arr.length < 3) {
         const random = (Math.floor(Math.random() * total) + 1);
         if (arr.indexOf(random) === -1) arr.push(random);
      }

      return arr;
   }


   useEffect(() => {
      const API_KEY = process.env.API_KEY;
      const API_URL = process.env.API_URL;
      const endpoint = 'discover/movie'

      const fetchResults = async () => {
         try {
            const response = await fetch (`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US${query}`);
            const data = await response.json();
            console.log(data)
            const total_results = data.total_results >= 10000 ? 10000 : data.total_results;
            const randomArray = randomNumber(total_results);
            // console.log(randomArray)
            // const randomArray = [12300, 2002, 53];
            const page = randomArray.map(e => Math.ceil(e/20));
            const IdOnPage = randomArray.map(e => (e%20-1) === -1 ? 19 : (e%20-1));
            let results = [];

            //I need to catch when there is 0 items
            for (let i = 0; i<3; i++){
               if (page[i] === 0) {
                  continue;
               }
               const response = await fetch (`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US${query}&page=${page[i]}`);
               const data = await response.json();
               const output = data.results[IdOnPage[i]];
               console.log(output)
               results.push(output);
               console.log(results);
            }
            setResults(results);

         } catch(error) {
            console.log(error)
         }
         finally {
              setLoading(false);
            }
         }

         fetchResults();
         
   },[]);




  return (
    <>
      { searchType === 'movie'
      ?
      (loading ? (<Spinner loading={loading}/>) : (
         <>
           { results.map((movie) => (
               <MovieListing movie ={movie} key ={movie.id}/>
            ))}
         </>
      ) )
      :
      (loading ? (<Spinner loading={loading}/>) : (
         <>
           { results.map((show) => (
               <ShowsListing show ={show} key ={show.id}/>
            ))}
         </>
      ) )
      }
    </>
  )
}

export default EntertainListings