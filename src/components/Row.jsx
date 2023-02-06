import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Row = ({title,fetchUrl}) => {

const [movies,setMovies] = useState([])
const [fill,setFill] = useState(false)

useEffect(()=> {
 axios.get(fetchUrl).then((response)=> {
    setMovies(response.data.results)
 })
},[fetchUrl])

const handlechange = () => {
  setFill(prev => prev = !prev)
}
    
  return (
    <div>
    
       <h1 className='text-white font-bold p-4'>{title}</h1> 
        <div className='md:p-4'>
            {movies.map((movie) => (
                <div className='inline-block w-[160px] sm:w-[200px] pl-3 relative'>
                     <img 
                className='hover:scale-110 cursor-pointer text-center text-sm text-slate-300 '
                src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                 alt={movie?.title}
                  />
                  <div className=' absolute top-0 left-0 hover:bg-black/70 h-full w-full opacity-0 hover:opacity-100'
                   
                  >
                        <p className='flex items-center justify-center text-xs p-5 cursor-pointer h-full'>
                        {movie?.title}

                        {fill?  <FaRegHeart className='absolute top-0 left-15 text-gray-200' size={25} onClick={handlechange}/> : <FaHeart className='absolute top-1 left-15 text-gray-200' size={25} onClick={handlechange}/>}
                       
                        
                        </p>
                    </div>
                    
                </div>
            ))}
        </div>

        </div>

  )
}

export default Row