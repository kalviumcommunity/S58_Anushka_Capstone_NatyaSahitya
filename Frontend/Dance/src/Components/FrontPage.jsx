import React from 'react';
import './Front.css';
import { Link } from 'react-router-dom';

function Front() {
  return (
    <>
      <div className='Main'>
        <div className='box-img'>

          <div className='head'>
            <Link to="/SignUp">
              <p>Sign Up</p>
            </Link>
            <p>Contact Us</p>
          </div>

          <div className='headline'>
            <h1>Let's explore your love for NatyaSahitya</h1>
            <p>Dance is the hidden language of the soul.</p>
          </div>

          <div className='head-btn'>
            <button>Get Started</button>
          </div>
        </div>

        <div className='content'>
          <div className='heading'>
            <p>Classical</p>
            <h2>Different Indian Classical dance forms</h2>
          </div>

          <div className='Dance-forms'>
            <Link to={"/Kathak"}>
              <h3>Kathak</h3>
            </Link>
            <h3>Bharatnatyam</h3>
            <h3>Manipuri</h3>
            <h3>Odissi</h3>
            <h3>Kathakali</h3>
            <h3>Mohiniattam</h3>
            <h3>Kuchipudi</h3>
            <h3>Sattriya</h3>
            <h3>Chhau</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Front