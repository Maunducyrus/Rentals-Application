import React from 'react'
import Back from '../common/Back'
import PriceCard from './PriceCard'

export const Pricing = () => {
  return (
    <>
     <section className="service mb">
        <Back name='Services' title='Services - All Services' cover={img} />
        <div className="price container">
            <PriceCard />
        </div>
    </section>
    </>
  )
}

export default Pricing