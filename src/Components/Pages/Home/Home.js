import React from 'react';
import './Home.css';
import Navbar from '../../Navbar/Navbar';
import banner_image from './../../../Assets/hero_banner.jpg';
import netflixlogo from './../../../Assets/hero_title.png';
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import TitleCards from '../../TitleCards/TitleCards';
import Footer from '../../Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className='hero'>
          <img src={banner_image}  alt='' className='banner-img'/>
          <div className='hero-caption'>
            <img src={netflixlogo} alt='' className='caption-img'/>
            <p>Discovering his ties to a secret ancient order , a young
              man living in modern Istanbul embarks on a quest to save the
              city from an immortal enemy.
            </p>
            <div className='hero-btns'>
              <button className='btn'><FaPlay />Play</button>
              <button className='btn dark-btn'><MdOutlineInfo className='info-icon'/>More Info</button>
            </div>
            <TitleCards />
          </div>
        </div>
        <div className='more-cards'>
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards title={"Only On Netflix"} category={"popular"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
        </div>
        <Footer />
    </div>
  )
}

export default Home;