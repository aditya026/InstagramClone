import React from 'react'
import images from '../components/images'
import './LowerSection.css';

const LowerSectin = () => {
  return (
    <div className='LowerSectin'>
      <div className='ls-1' id='post'>
        <img src={images.post} alt="" />
        <a href="">Post</a>
      </div>
      <div className='ls-1' id='reel'>
        <img src={images.reel} alt="" />
        <a href="">Reel</a>
      </div>
      <div className='ls-1' id='saved'>
        <img src={images.saved} alt="" />
        <a href="">Saved</a>
      </div>
      <div className='ls-1' id='tagged'>
        <img src={images.tag} alt="" />
        <a href="">Tagged</a>
      </div>
    </div>
  )
}

export default LowerSectin
