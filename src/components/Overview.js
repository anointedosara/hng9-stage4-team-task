import React from 'react'

function Overview() {
  const data = [
    {
      number: 72,
      text: 'Total Applications'
    },
    {
      number: 11,
      text: 'Completed Interviews'
    },
    {
      number: 4,
      text: 'Active Applications'
    }
  ]
  return (
    <div className='overview'>
      <p>Overview</p>
      <div className='overview-grid'>
        {
          data?.map((item, i) => <div key={i}>
            <h1>{item?.number}</h1>
            <p>{item?.text}</p>
            </div>)
        }
      </div>
    </div>
  )
}

export default Overview
