import React from 'react'

function SideNav() {
  return (
    <div className='sidenav'>
        <img src="./images/logo.svg" alt="" />

        <div>
            <button>
                <img src="./images/dashboard.svg" alt="" />
                Dashboard
                <div></div>
            </button>
            <button>
                <img src="./images/person-icon.svg" alt="" />
                My job profile
            </button>
            <button>
                <img src="./images/applications.png" alt="" />
                Applications
            </button>
        </div>
    </div>
  )
}

export default SideNav
