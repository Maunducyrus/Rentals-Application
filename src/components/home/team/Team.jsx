import React from 'react'
import "./team.css"

export const Team = () => {
  return (
  <>
  <div className="team background">
    <div className="container">
    <Heading title='Our Featured Agents' subtitle='Meet Our Team members who are ready and have all what it takes to satisfy customer needs - all our team are qualified' />

    <div className="content mtop grid3">
        {Team.map((val, index) => {
            return (
                <div className="box" key={index}>
                    <button className='btn3'>{val.list} Listings</button>
                    <div className="details">
                        <div className="img">
                            <img src={val.cover} alt="" />
                            <i className="fa fa-circle-check"></i>
                        </div>
                        <i className="fa fa-location-dot"></i>
                        <label htmlFor="">{val.address}</label>
                        <h4>{val.name}</h4>

                        <ul>
                            {val.icon.map((icon, index) => (
                                <li key={index}> {icon}</li>
                            ))}
                        </ul>
                        <div className="button flex">
                            <button>
                                <i className="fa fa-envelope"></i>
                                Message
                            </button>
                        </div>
                        <div className="button btn4">
                            <button>
                                <i className="fa fa-phone-alt"></i>
                            </button>
                        </div>
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
