import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';


import { Link } from 'react-router-dom';
import Spinner from './Spinner';


const SwiperSlider = () => {
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
            const endpoint = 'movie/now_playing'
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
         fetchMovies();
      },[]);
      



  return (
   <>
             {loading ? (<Spinner loading={loading}/>) : (
               <Swiper
               modules={[Autoplay, A11y]}
               spaceBetween={30}
               freeMode={true}
               loop={true}
               slidesPerView={2}
               autoplay = {{delay: 2000, disableOnInteraction:false, pauseOnMouseEnter:true}}
               breakpoints= {{500:{slidesPerView:2}, 
                              600:{slidesPerView:2},
                              900:{slidesPerView:3},
                              1200:{slidesPerView:4}
                           }}
               >
                { movies.map((movie) => (
                 <SwiperSlide key={movie.id} className='swiper-slide'>
                  <Link to={`/:${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='rounded-lg'/>
                  </Link>
               </SwiperSlide>
               ))
               }
               </Swiper>
            ) }
         </>  
    
  )
}

export default SwiperSlider