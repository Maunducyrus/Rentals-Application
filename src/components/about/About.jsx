import React from 'react'
import img from '../images/about.jpg'
import Back from '../common/Back'

export const About = () => {
  return (
   <>
   <section className='about'>
    <Back name='About Us' title='About us - Who We Are ?' cover={img} />
    <div className="container flex mtop">
        <div className="left row">
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
        </div>
    </div>
   </section>
   </>
  )
}

export default About
