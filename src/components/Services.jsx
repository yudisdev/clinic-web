import React from 'react'
import  { FaEye, FaCrown, FaHandSparkles } from 'react-icons/fa'
import {RiHandHeartLine } from 'react-icons/ri';

const Services = () => {
    const services = [
        {icon: <FaEye className='text-4xl text-pink-600' aria-hidden='true'/>,
            title: "Sulam Alis Natural",
            desc : 'Bentuk alis sempurna yang natural dan tahan lama. Menggunakan teknik modern dan alat steril untuk hasil maksimal.',
            link : "#facelift"
        },
        {icon: <FaCrown className='text-4xl text-pink-600' aria-hidden='true'/>,
            title: "Sulam Alis Premium",
            desc : 'Teknik sulam alis eksklusif untuk hasil presisi dan elegan. Warna sesuai bentuk wajah, tahan hingga 2 tahun.',
            link : "#botox"
        },
        {icon: <RiHandHeartLine className='text-4xl text-pink-600' aria-hidden='true'/>,
            title: "Nail art & kutek",
            desc : 'Percantik kukumu dengan berbagai desain unik dan warna menarik. Hasil rapi, awet, dan dikerjakan oleh profesional.',
            link : "#laser"
        },
        {icon: <FaHandSparkles className='text-4xl text-pink-600' aria-hidden='true'/>,
            title: "Perawatan Kuku",
            desc : 'Rawat kesehatan dan keindahan kuku dengan treatment perawatan berkala, membuat kuku tetap kuat dan berkilau.',
            link : "#contouring"
        },
    ]
  return (
   <section
   id='services'
   className='py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100'
   aria-labelledby='services-heading'>
    <div className='container mx-auto px-4'>
        <header data-aos='fade-up' data-aos-delay='500' className='text-center mb-16'>
            <h2 id='services-heading' className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
                Layanan <span className='text-pink-600'>Premium Kami</span>
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Dapatkan pelayanan terbaik dengan kualitas yang terjamin untuk setiap kebutuhan Anda.
            </p>
        </header>
            <ul data-aos='fade-up' data-aos-delay='500' 
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {services.map((service, index)=>(
                    <li key={index}>
                        <article
                        className='bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300
                        hover:translate-y-[-5px] h-full flex flex-col'>
                            <figure className='mb-6'>
                                {service.icon}
                            </figure>
                            <h3 className='text-xl font-bold text-gray-800 mb-3'>
                                {service.title}
                            </h3>
                            <p className='text-gray-600 m-6 flex-grow'>{service.desc}</p>
                            <a href={service.link}
                            className='text-pink-600 font-medium hover:text-pink-700 transition
                            flex items-center m-auto'
                            aria-label={`learn more about ${service.title}`}>
                                Lihat Selengkapnya
                                <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'
                                aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                                     d='M9 5l7 7-7 7'></path>
                                </svg>
                            </a>
                        </article>
                    </li>
                ))}
            </ul>
            <footer data-aos='fade-up' data-aos-delay='600' 
            className='mt-20 text-center'>
                <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                    Siap ubah penampilanmu jadi lebih keren?
                </h3>
                <a href="#JadwalKonsultasi"
                className='bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full
                inline-block transition shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-800
                focus:ring-offset-2'
                aria-label='Book your consultation now'>
                    Pesan jadwal sekarang
                </a>
            </footer>
    </div>
   </section>
  )
}

export default Services