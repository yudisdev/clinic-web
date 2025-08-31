import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
    const contactItems = [
        {
            icon: < FaMapMarkerAlt className='text-pink-600 text-xl'/>,
            title: 'Our Location',
            content: (
                <p className='text-gray-600'>
                  Perumahan taman buana permai, block C no 9. <br />
                  Denpasar, Bali.      
                </p>
            )      
        },
        {
            icon: < FaMapMarkerAlt className='text-pink-600 text-xl'/>,
            title: 'Our Location',
            content: (
                <p className='text-gray-600'>
                  Perumahan taman buana permai, block C no 9. <br />
                  Denpasar, Bali.      
                </p>
            )      
        }
    ]
  return (
    <div>Contact</div>
  )
}

export default Contact