import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Main = () => {

const [movies,setMovies] = useState([])

const movie = movies[Math.floor(Math.random() * movies.length)]

useEffect(()=> {
 axios.get(requests.requestUpcoming).then((response)=> {
  setMovies(response.data.results)
 })
},[])

  return (
    <div className='h-[600px] w-full absolute top-0 -z-10 '>
       <div className='absolute w-full h-[500px] bg-gradient-to-r from-black'></div>
         <div className='h-[500px] w-full'>
          <img 
          className=' w-full h-full object-cover opacity-40'
           src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
           alt={movie?.title}
           />
         </div>

         <div className='text-white absolute top-20 p-5 max-w-[700px] mt-20'>
         <h1 className='text-2xl mb-2 font-bold'>{movie?.title}</h1>
         <button className='bg-white text-black p-2 text-xl'>PLAY</button>
         <button className='border p-2 text-xl ml-2 hover:bg-slate-400 '>WATCH</button>
         <p className='mt-2'>{movie?.overview}</p>
         </div>
      
      
    </div>
  )
}

export default Main