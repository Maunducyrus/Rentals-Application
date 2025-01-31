import React from 'react'
import Back from '../common/Back'
import img from '../images/services.jpg'
import FeaturedCard from '../home/featured/FeaturedCard'

export const Services = () => {
  return (
    <>
    <section className="service mb">
        <Back name='Services' title='Services - All Services' cover={img} />
        <div className="featured container">
            <FeaturedCard />
        </div>
    </section>
    </>
  )
}

export default Services