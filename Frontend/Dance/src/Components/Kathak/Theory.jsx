import React from 'react'
import '../Kathak.css'
import Facebook from '../../assets/Facebook.png';
import Instagram from '../../assets/Instagram.png';
import Youtube from '../../assets/Youtube.png';

function Theory() {
  return (
    <>
      <div className='K-main'>
        <div className='K-header'>
          <div className='H-box1'>
            <h1>Kathak</h1>
          </div>
          <div className='H-box2'></div>
        </div>
        <div className='K-theory'>
          <div className='K-boxes'>
            <div className='chapters'>
              <p></p>
            </div>
            <div className='chapters'>
              <p></p>
            </div>
            <div className='chapters'>
              <p></p>
            </div>
            <div className='chapters'>
              <p></p>
            </div>
          </div>
        </div>
        <div className='K-footer'>
          <div className='F-box1'>
            <div>
            <p>Contact Us: 72210.....</p>
            </div>
            <div className='share'>
              <div>Share: </div>
              <div className='share-btn'>
                <img className='Facebook' src={Facebook} alt="Facebook" />
                <img className='Instagram' src={Instagram} alt="Instagram" />
                <img className='Youtube' src={Youtube} alt="Youtube" />
              </div>
            </div>
          </div>
          <div className='F-box2'>
            <div className='Picture'>

            </div>
            <div className='mention'>By:- Anushka Bhatt</div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Theory