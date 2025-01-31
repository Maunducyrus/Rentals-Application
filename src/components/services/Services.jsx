import React from 'react'
import Back from '../common/Back'
import img from '../images/services.jpg'
import FeaturedCard from '../home/featured/FeaturedCard'

export const Services = () => {
  return (
    <>
    <div className="service mb">
        {/* {<Back name='' title='' cover={} />} */}
        <Back name='Services' title='Services - All Services' cover={img} />
        <div className="featured container">
            <FeaturedCard />
        </div>
    </div>
    </>
  )
}

export default Services