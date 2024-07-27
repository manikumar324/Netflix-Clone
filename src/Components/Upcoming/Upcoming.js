import React from 'react';
import './Upcoming.css';
import Blockbuster_data from '../../Assets/Cards/Blockbuster_data.js';
// import Upcoming_data from '../../Assets/Cards/Upcoming_data.js';

const Upcoming = () => {

  return (
    <div className='title-cards'>
        <h2>Upcoming</h2>
        <div className='card-list'>
          {Blockbuster_data.map((card,index)=>{
            return <div className='card' key={index}><img src={card.image} alt='movie-img'/>
            <p className='movie-name'>{card.name}</p></div>
          })}
        </div>
    </div>
  )
}

export default Upcoming;