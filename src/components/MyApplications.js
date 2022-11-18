import React from 'react'
import myApplicationData from '../data'

function MyApplications() {
  const data = myApplicationData
  return (
    <div className='container'>
      <div className='myapplication'>
        <div className="myapplication-head">
        <p>My Applications</p>
        <p>See all</p>
        </div>
        <div className='applications'>
        {
          data?.map((item, i) => <div className={item?.id > 5 ? 'hide application' : 'application'} key={i}>
            <div className='application-title'>
              <div className="img-div"><img src={item?.image} alt="" /></div>
              <div>
                <h1>{item?.title}</h1>
                <p>{item?.description}</p>
              </div>
            </div>

              <p>{item?.type}</p>

              <p>{item?.time}</p>
          </div>)
        }
        </div>
      </div>
    </div>
  )
}

export default MyApplications
