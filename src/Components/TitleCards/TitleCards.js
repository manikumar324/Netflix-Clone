import React from 'react';
import './TitleCards.css';
import cards_data from './../../Assets/Cards/Card_data';
// import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const TitleCards = () => {
  // const[apiData,setApiData]=useState([])

  // useEffect(()=>{
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWU5ZTA2ODFmZTA0OGYzMDY2MTU4OTdhN2JmZDkyOCIsInN1YiI6IjY2NDQ0YTI5NjA5ZDZhZWMzMWM1Mzg4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KhY1YxnIpV1T42oCQ3z7PNVGAzzuB3w3rHUU87xfLYo'
  //     }
  //   };
    
  //   fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  //     .then(response => response.json())
  //     .then(response => setApiData(response.results))
  //     .catch(err => console.error(err));
  // },[category])
  return (
    <div className='title-cards'>
        {/* <h2>{title?title:"Popular On Netflix"}</h2> */}
        <h2>Popular On Netflix</h2>
        <div className='card-list'>
          {/* {apiData.map((card, index)=>{
              return <Link to={`/player/${card.id}`} className='card' key={index}>
                <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt='' />
                <p className='movie-name'>{card.original_title}</p>
              </Link>
          })} */}
          {cards_data.map((card,id)=>{
            return <Link to={`/player/${card.id}`} className='card' key={id}>
              <img src={card.image} alt='movie-img'/>
            <p className='movie-name'>{card.name}</p></Link>
          })}
        </div>
    </div>
  )
}

export default TitleCards;