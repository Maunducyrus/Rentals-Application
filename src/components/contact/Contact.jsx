import React from 'react'
import Back from '../common/Back'
import './contact.css'
import img from '../images/pricing.jpg'
export const Contact = () => {
  return (
    <>
    <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
    </section>
    </>
  )
}

export default Contact 