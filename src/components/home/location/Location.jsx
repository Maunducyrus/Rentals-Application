import React from 'react'
import './location.css'

const Location = () => {
  return (
    <>
    <div className="location padding">
        <div className="container">
            <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
            <div className="content grid3 mstop">
                {location.map((items, index) => {
                    <div className="box"></div>
                })}
            </div>
        </div>
    </div>
    </>
    )
}

export default Location
