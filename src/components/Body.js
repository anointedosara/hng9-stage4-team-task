import React from 'react'
import MyApplications from './MyApplications'
import Overview from './Overview'
import Header from '../components/Header'

function Body() {
  return (
    <div>
      <Header />
      <Overview />
      <MyApplications />
    </div>
  )
}

export default Body
