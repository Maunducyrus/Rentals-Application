import React from 'react'
import './awards.css'
import Heading from '../../common/Heading'

export const Awards = () => {
  return (
    <>
    <div className="awards padding">
      <div className="container">
        <Heading title='Over 1,24,000+ Happy User Being And Still They Love Our Service' subtitle='Our Awards' />

        <div className="content grid4 mtop">
          {Awards.map((val, index) => {
            return (
              <div className="box" key={index}>

              </div>
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
}
