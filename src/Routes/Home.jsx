import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'




const Home = () => {
  return (
    <div className='text-white'>
       <Main />
       <div className='absolute top-[520px]'>
       <Row title="Upcoming" fetchUrl={requests.requestUpcoming}/>
       <Row title="Horror" fetchUrl={requests.requestHorror}/>
       <Row title="Trending" fetchUrl={requests.requestTrending}/>
       <Row title="TopRated" fetchUrl={requests.requestTopRated}/>
       
       </div>
      
    </div>
  )
}

export default Home