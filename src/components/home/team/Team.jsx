import React from 'react'

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
                </div>
            )
            
        })}
    </div>
    </div>
  </div>
  </> 
  )
}
