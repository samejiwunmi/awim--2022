import React from 'react'
import { GiCommercialAirplane } from 'react-icons/gi'

const Schedule = () => {
  return (
    <div>
        <div className="airport">
          <div className="icon">
            <GiCommercialAirplane />
          </div>
          <div className="header">
            <h1 className='text-[50px] font-bold '>Transfer from airport</h1>
          </div>
        </div>
    </div>
  )
}

export default Schedule