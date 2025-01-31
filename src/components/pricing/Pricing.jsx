import React from 'react'
import Back from '../common/Back'
import img from '../images/pricing.jpg'
import PriceCard from '../home/price/PriceCard'

export const Pricing = () => {
  return (
    <>
     <section className="service mb">
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className="price container">
            <PriceCard />
        </div>
    </section>
    </>
  )
}

export default Pricing