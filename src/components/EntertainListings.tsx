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
   const [randomArr, setRandomArr] = useState<string[]>([]);

 
   let query ='';
   
   if (urlParams.get('year')) {
      query = query + `&primary_release_date.gte=${minYear}-01-01&primary_release_date.lte=${maxYear}-12-31`;
   }

   function randomNumber(total:number):string[] {
      let arr =[];
      while (arr.length < 3) {
         const random = (Math.floor(Math.random() * total) + 1).toString();
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
            // const randomArray = randomNumber(data.total_results);
            // setRandomArr(randomArray);
            // const results = data.results.filter((element) => randomArray.includes(element.id));
            setResults(data.results);
         } catch(error) {
            console.log(error)
         }
         finally {
              setLoading(false)
            }
         }
         fetchResults();

         
   //       const fetchResultsFinal = async () => {
   //          try {
   //             let results = [];
   //             for (let i = 1; i<=3; i++){
   //                console.log(randomArr);
                  
   //             }
   //             const response = await fetch (`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US${query}&page=${1}`);
   //             const data = await response.json();
   //             // const results = data.results.filter((element) => randomArray.includes(element.id));
   //             // results.push(data)
   //          } catch(error) {
   //             console.log(error)
   //          }
   //          finally {
   //               setLoading(false)
   //             }
   //          }
   //       fetchResultsFinal();
         
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