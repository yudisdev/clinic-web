import React from 'react'
import aboutImage from '../assets.AboutImage.png'
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
        text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero illo repellendus culpa cupiditate error! Dolorem quae mollitia perferendis alias harum!' 
      },
      {
        icon: <FaUserMd className='text-pink-600' aria-hidden='true'/>,
        text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero illo repellendus culpa cupiditate error! Dolorem quae mollitia perferendis alias harum!' 
      },
      {
        icon: <FaClinicMedical className='text-pink-600' aria-hidden='true'/>,
        text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero illo repellendus culpa cupiditate error! Dolorem quae mollitia perferendis alias harum!' 
      },
    ]

  return (

    <section id='about' className='py-14 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100'>
      <div className='container mx-auto px-4'>
        <article data-aos='fade-up' data-aos-delay='400' className='flex flex-col lg:flex-row items-center gap-12'>
          <figure className='lg:w-5/12 relative'>
          <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto'>
            <img src={aboutImage}
            className='w-full h-auto object-cover aspect-[4/5]'
            loading='lazy'/>
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'
            aria-hidden='true'>
            </div>
          </div>

            <span className='hidden lg:block absolute -bottom-8 -left-8 w-32 h-32 rounded-full
            bg-pink-500 opacity-20 z-0'
            aria-hidden='true'>
            </span>
            <span className='hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full
            bg-pink-600 opacity-20 z-0'
            aria-hidden='true'>
            </span>
            <aside className='absolute bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20'>
              <strong className='text-2xl font-bold text-pink-600'>3+</strong>
              <small className='block text-xs font-medium text-gray-600'>Tahun Pengalaman</small>
            </aside>
          </figure>

          <div data-aos='fade-up' data-aos-delay='600' className='lg:w-7/12'>
            <header>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Tentang <span className='text-pink-600'>Dinda Beauty Care</span>
              </h2>
            </header>
          </div>
        </article>
      </div>
    </section>

  )
}

export default About