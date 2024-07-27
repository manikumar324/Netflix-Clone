import React from 'react';
import './Player.css';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';

const Player = () => {
  const {id} = useParams()

  const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWU5ZTA2ODFmZTA0OGYzMDY2MTU4OTdhN2JmZDkyOCIsInN1YiI6IjY2NDQ0YTI5NjA5ZDZhZWMzMWM1Mzg4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KhY1YxnIpV1T42oCQ3z7PNVGAzzuB3w3rHUU87xfLYo'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  })
  
  return (
    <div className='player'>
        <Link to={"/"}><IoArrowBackCircleOutline className='back-icon'/></Link>
        <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' frameBorder="0" allowFullScreen></iframe>
        <div className='player-info'>
          <p>Published at : {apiData.published_at.slice(0,10)}</p>
          <p>Name : {apiData.name}</p>
          <p>Type : {apiData.type}</p>
        </div>
    </div>
  )
}

export default Player;