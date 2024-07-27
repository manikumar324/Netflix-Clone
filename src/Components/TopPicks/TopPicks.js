import React from 'react';
import './TopPicks.css';
import Blockbuster_data from '../../Assets/Cards/Blockbuster_data.js';
// import TopPicks_data from '../../Assets/Cards/TopPicks_data.js';



const TopPicks = () => {

  return (
    <div className='title-cards'>
        <h2>Top Picks For You</h2>
        <div className='card-list'>
          {Blockbuster_data.map((card,index)=>{
            return <div className='card' key={index}><img src={card.image} alt='movie-img'/>
            <p className='movie-name'>{card.name}</p></div>
          })}
        </div>
    </div>
  )
}

export default TopPicks;