import React from 'react'
import { PriceCard } from './PriceCard'

export const Price = () => {
  return (
    <>
    <section className="price padding">
        <div className="container">
            <Heading title='Select Your Package' subtitle='Variety of favourable prices for you select what pleases you and within your budget' />
            <PriceCard />
        </div>
    </section>
    </>
  )
}
