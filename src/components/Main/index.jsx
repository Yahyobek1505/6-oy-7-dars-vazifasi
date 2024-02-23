import React from 'react'
import "./index.css"
import img from '../../assets/macbook.png'
import icon from '../../assets/icon.png'
function Main() {
  return (
    <>
      <div className="main">
      <h1 className='title'>Launch your own online learning platform</h1>
      <p className='paragrph'>Top instructors from around the world teach millions of students on kreed. Get unlimited access to 2,000+ courses for your team.</p>
      <button className='button'>Explore Courses</button>
      </div>
      <div className="images">
      <img className='img' src={img} alt="" />
      <img className='icon' src={icon} alt="" />
      </div>
    </>
  )
}

export default Main; 
