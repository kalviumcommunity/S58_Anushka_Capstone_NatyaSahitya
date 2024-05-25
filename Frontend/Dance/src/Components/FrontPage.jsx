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
      </div>
    </>
  )
}

export default Front