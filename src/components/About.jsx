import React from 'react'
import aboutImage from '../assets/aboutImage.png'
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
        text:'WhatsApp',
        text2:'Hubungi kami di 08123456789 untuk konsultasi gratis dan jadwalkan perawatan alismu hari ini!'

      },
      {
        icon: <FaUserMd className='text-pink-600' aria-hidden='true'/>,
        text:'Instagram',
        text2:'follow kami di @dindabeautycare untuk meliat hasil dan promo menarik'
      },
      {
        icon: <FaClinicMedical className='text-pink-600' aria-hidden='true'/>,
        text:'Alamat Studio ' ,
        text2:'Perumahan taman buana permai, block C no 9'
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
              <p className='text-lg text-gray-600 mb-6'>
                  Dinda Beauty Care adalah tempat perawatan alis yang menghadirkan sentuhan natural dan elegan untuk setiap pelanggan.
                  Kami percaya setiap orang berhak memiliki alis yang indah dan sesuai karakter wajah.
                  Dengan teknik terkini dan suasana yang nyaman, kami selalu siap membuatmu tampil lebih percaya diri.
              </p>
            </header>
            <section className='m-8'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>Hubungi Kami</h3>
              <ul className='space-y-3'>
                {approachTtems.map((item, index) =>(
                  <li key={index} className='flex items-start'>
                    <figure className='bg-pink-100 p-1 rounded-full mr-3'>
                      {item.icon}
                    </figure>
                    <figure>
                    <p className='text-gray-700'>{item.text}</p>
                    <p className='text-gray-700'>{item.text2}</p>
                    </figure>
                  </li>
                ))}
              </ul>
            </section>
            <section className='grid grid-cols-2 gap-4 mb-8'>
              {stats.map((item, index) => (
                <article key={index} className='bg-white p-4 rounded-lg shadow-sm flex items-center'>
                  <figure className='mr-3'>
                    {item.icon}
                  </figure>
                  <div>
                    <strong className='text-xl font-bold text-gray-800'>{item.value}</strong>
                    <p className='text-sm text-gray-600'>{item.label}</p>
                  </div>
                </article>
              ))}
            </section>
            

            <nav>
              <a href="#" className='inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full
              transition shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2'>
                Spesialis alis kami
              </a>
            </nav>
          </div>
        </article>
          <aside data-aos='fade-up' data-aos-delay='700' className='mt-20 bg-white rounded-2xl md:p-12 shadow-lg relative overflow-hidden'>
            <span className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-500 opacity-40'
            aria-hidden='true'></span>
            <div className='relative z-10 py-5 px-5 md:px-0 md:py-0'>
              <h3 className='text-2xl font-bold text-gray-800 mb-6'>Misi Kami</h3>
              <blockquote className='text-lg text-gray-700 mb-6'>
                 Dinda Beauty Care hadir untuk memberikan pengalaman sulam alis yang nyaman, ramah, dan penuh perhatian.
                 Kami percaya setiap orang berhak memiliki alis indah yang natural dan sesuai karakter wajahnya.
                 Dengan teknik terkini dan bahan yang aman, kami selalu berusaha memberikan hasil terbaik agar setiap pelanggan merasa percaya diri dan puas setelah perawatan bersama kami.
              </blockquote>
              <figure className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4'>
                  <FaUserMd className='text-pink-600' aria-hidden='true'/>
                </div>
                <figcaption>
                   <cite className='font-semibold text-gray-800 not-italic'>Ni Made Dian Widiani</cite>
                   <p>Owner & Brow artist</p>
                </figcaption>
              </figure>
            </div>
          </aside>
      </div>
    </section>

  )
}

export default About