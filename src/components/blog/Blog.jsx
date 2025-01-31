import React from 'react'
import img from '../images/about.jpg'
import Back from '../common/Back'
import RecentCard from '../home/recent/RecentCard'

export const Blog = () => {
  return (
    <>
    <section className='blog-out mb'>
          <Back name='' title='Blog Grid - Our Blogs' cover={img} />
          <div className="container recent">
            <RecentCard />
          </div>
    </section>
    </>
  )
}

export default Blog