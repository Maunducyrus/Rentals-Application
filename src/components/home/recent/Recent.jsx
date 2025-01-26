import React from 'react'
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className="container">
            <Heading title='Recent Property Listed' subtitle='Get the latest property listed now for your benefit - we value you'/>
            <RecentCard />
        </div>
      </section>
    </>
    )
}

export default Recent