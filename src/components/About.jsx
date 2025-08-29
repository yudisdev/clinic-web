import React from 'react'
import { FaAward, FaClinicMedical, FaHeart, FaUserMd } from 'react-icons/fa'

const About = () => {
    const stats = [
        {value:"3+", label:"Tahun Pengalaman", icon: <FaAward className='text-pink-500' aria-hidden='true' />},
        {value:"1000+", label:"Klien Puas", icon: <FaHeart className='text-pink-500' aria-hidden='true' />},
        {value:"10+", label:"Pilihan Gaya", icon: <FaUserMd className='text-pink-500' aria-hidden='true' />},
        {value:"15+", label:"Brow Artist Profesional", icon: <FaClinicMedical className='text-pink-500' aria-hidden='true' />},
    ];

    const approachTtems = [
      {
        icon: <FaHeart className='text-pink-600' aria-hidden='true'/>,
        text:'' 
      }
    ]
  return (
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero illo repellendus culpa cupiditate error! Dolorem quae mollitia perferendis alias harum!</div>
  )
}

export default About