import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div>
        <h1>Good evening Bukola, </h1>
        <p>Here’s an overview for you</p>
      </div>
      <div className='header-profile'>
        <img src="./images/bell-icon.svg" alt="" />
        <img src="./images/profile-img.svg" alt="" />
      </div>
    </div>
  )
}

export default Header
