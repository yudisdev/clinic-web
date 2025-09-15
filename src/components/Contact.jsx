import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const Contact = () => {
    const contactItems = [
        {
            icon: < FaMapMarkerAlt className='text-pink-600 text-xl'/>,
            title: 'Lokasi',
            content: (
                <p className='text-gray-600'>
                  Perumahan taman buana permai, block C no 9. <br />
                  Denpasar, Bali.      
                </p>
            )      
        },
        {
            icon: < FaPhoneAlt className='text-pink-600 text-xl'/>,
            title: 'Nomer Telefon',
            content: (
                <p className='text-gray-600'>
                  Appointments: <a href="#" className='hover:text-pink-600'>+62 812-3892-8001</a>    
                </p>
            )      
        },
        {
            icon: < FaEnvelope className='text-pink-600 text-xl'/>,
            title: 'Email',
            content: (
                <p className='text-gray-600'>
                  Appointments: <a href="#" className='hover:text-pink-600'>Dindabeautycare@gmail.com</a>    
                </p>
            )      
        },
        {
            icon: < FaClock className='text-pink-600 text-xl'/>,
            title: 'Working Hours',
            content: (
                <p className='text-gray-600'>
                  Appointments: <a href="#" className='hover:text-pink-600'>Dindabeautycare@gmail.com</a>    
                </p>
            )      
        }
    ]
  return (
    <div>Contact</div>
  )
}

export default Contact