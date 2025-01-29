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
                    return (
                        <div className="box" key={index}>
                            <img src={items.cover} alt="" />
                            <div className="overlay">
                                <h5>{items.name}</h5>
                                <p>
                                    <label>{items.villas}</label>
                                    <label>{items.Offices}</label>
                                    <label>{items.Apartments}</label>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    </>
    )
}

export default Location
