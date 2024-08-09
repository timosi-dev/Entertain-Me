import { useEffect, useState } from 'react'
import Spinner from "../components/Spinner"
import SearchListing from './SearchListing';

const SearchListings = () => {
   interface Data {
      id: number;
      poster_path: string;
      title: string;
      release_date: string;
   }
  
   const [data, setData] = useState<Data[]>([]);
   const [loading, setLoading] = useState<boolean>(true)
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const searchType = urlParams.get('type');
   const searchTerm = urlParams.get('search-term');
   

   
   
   useEffect(() => {
     const API_KEY = process.env.API_KEY;
     const API_URL = process.env.API_URL;
  
  
      const fetchData = async () => {
         try {
            const response = await fetch (`${API_URL}search/${searchType}?api_key=${API_KEY}&language=en-US&query=${searchTerm}`);
            const res = await response.json();
            setData(res.results)
         } catch(error) {
            console.log(error)
         }
         finally {
              setLoading(false)
            }
         }
         fetchData()  
        },[]);

      if(data.length === 0 && loading === false){
         return (
            <>
               <div></div>
              <div id='alert' className='flex justify-center text-red-400 text-lg text-center -ml-32
              '>No results found</div>
              <div className='h-screen'></div>
            </>
         )
      }


  return (
   <>
   {loading ? (<Spinner loading={loading}/>) : (
     <>
     <h2 className="text-center pt-6 text-2xl uppercase text-white">Search Results</h2>
     <div id="popular-movies" className="grid grid-cols-2 p-10 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       { 
         data.map((dt) => (
           <SearchListing item ={dt} key ={dt.id} type={searchType}/>
        ))}
      </div>
     </>
  ) }
</> 
  )
}

export default SearchListings