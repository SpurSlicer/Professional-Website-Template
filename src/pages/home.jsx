import { useState } from 'react'
import { handleIconClick } from '../libs/button_helper'
import "./page.css"
import bk_1 from "../assets/bk_curve_corner.png";
import bk_1_dark from "../assets/bk_curve_corner_dark.png";
import { useNavigate } from 'react-router';

function Home({ setCurrentPage }) {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const decide_dark = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return bk_1_dark;
    } else {
      return bk_1;
    }
  }
  return (
    <div className='home'>
        <img className='background_1' src={decide_dark()}/>
        <img className='background_2' src={decide_dark()}/>
        <div className='left_col'>
          <p className='greeting'>Hello!</p>
          <p className='copula'>I am</p>
          <h1 className='first-name'>Firstname</h1>
          <h1 className='last-name'>Lastname</h1>
          <h3 className='profession'>Profession 1</h3>
          <h3 className='and'>&</h3>
          <h3 className='profession'>Profession 2</h3>
          <button id='portfolio' className='projects-button' onClick={(e) => handleIconClick(e, navigate, setCurrentPage)}>See my projects</button>
      </div>
  </div>
  )
}

export default Home
