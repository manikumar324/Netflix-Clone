import React from 'react';
import './OnlyOnNetflix.css';
import Blockbuster_data from '../../Assets/Cards/Blockbuster_data.js';
// import OnlyOnNetflix from '../../Assets/Cards/OnlyNetflix_data.js';


const OnlyOnNetflix = () => {

  return (
    <div className='title-cards'>
        <h2>Only On Netflix</h2>
        <div className='card-list'>
          {Blockbuster_data.map((card,index)=>{
            return <div className='card' key={index}><img src={card.image} alt='movie-img'/>
            <p className='movie-name'>{card.name}</p></div>
          })}
        </div>
    </div>
  )
}

export default OnlyOnNetflix;