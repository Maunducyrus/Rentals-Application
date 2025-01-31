import React from 'react'
import Back from '../common/Back'
import './contact.css'
import img from '../images/pricing.jpg'
export const Contact = () => {
  return (
    <>
    <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className="container">
            <form action="" className='shadow'>
                <h4>Fillup The Form</h4>
            </form>
        </div>
    </section>
    </>
  )
}

export default Contact 