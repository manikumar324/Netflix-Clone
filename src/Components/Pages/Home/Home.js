import React from 'react';
import './Home.css';
import Navbar from '../../Navbar/Navbar';
import banner_image from './../../../Assets/hero_banner.jpg';
import netflixlogo from './../../../Assets/hero_title.png';
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import TitleCards from '../../TitleCards/TitleCards';
import Footer from '../../Footer/Footer';
import TitleCardBlockBuster from '../../TitleCardBlockbuster/TitleCardBlockBuster';
import OnlyOnNetflix from '../../OnlyOnNetflix/OnlyOnNetflix';
import TopPicks from '../../TopPicks/TopPicks';
import Upcoming from '../../Upcoming/Upcoming';

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
          <TitleCardBlockBuster />
          <OnlyOnNetflix />
          <Upcoming/>
          <TopPicks/>
        </div>
        <Footer />
    </div>
  )
}

export default Home;