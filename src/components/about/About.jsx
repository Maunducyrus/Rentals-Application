import React from 'react'
import './about.css'
import img from '../images/about.jpg'
import Back from '../common/Back'
import Heading from '../common/Heading'

export const About = () => {
  return (
   <>
   <section className='about'>
    <Back name='About Us' title='About us - Who We Are ?' cover={img} />
    <div className="container flex mtop">
        <div className="left row">
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Lorem ipsum dolor sit,
                 amet consectetur adipisicing elit. Provident sapiente obcaecati
                  porro aliquam tenetur amet. Quam ab soluta corporis, nemo minus, reprehenderit vitae voluptatum odit commodi amet quibusdam quis nihil.
                  </p>
        </div>
        <p>Lorem ipsum dolor sit,
                 amet consectetur adipisicing elit. Provident sapiente obcaecati
                  porro aliquam tenetur amet. Quam ab soluta corporis, nemo minus, reprehenderit vitae voluptatum odit commodi amet quibusdam quis nihil.
                  </p>
                  <button className='btn2'>More About Us</button>
    </div>
    <div className="right row">
        <img src="./immio.jpg" alt="" />
    </div>
   </section>
   </>
  )
}

export default About
