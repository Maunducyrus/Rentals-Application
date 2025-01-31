import React from 'react'
import img from '../images/about.jpg'
import Back from '../common/Back'

export const About = () => {
  return (
   <>
   <section className='about'>
    <Back name='About Us' title='About us - Who We Are ?' cover={img} />
   </section>
   </>
  )
}

export default About
