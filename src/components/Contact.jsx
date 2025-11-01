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
                     Minggu - Jumat: 09.00 - 20.00 <br />
                     Sabtu: 09.00 - 17.00 <br/>
                     Minggu: Tutup
                </p>
            )      
        }
    ];

    const services = [
      {value: "botox", label: "Botox Tratment"},
      {value: "fillers", label: "Dermal fillers"},
      {value: "laser", label: "Laser Teraphy"},
      {value: "facelift", label: "Mon-SUgical Facelift"},
      {value: "other", label: "Other"},
    ]

  return (
    <article id='contact' className='py-20 overflow-hidden bg-gradient-to-r from bg-pink-100 to-purple-100'>
        <div className='container mx-auto px-4'>
          <header data-aos="fade-up" data-aos-delay="400" className='text-center mb-16 relative'>
            <div className='absolute -top-10 left-1/2 transform -trasnlate-x-1/2 w-2/4 h-24 rounded-full
            bg-pink-100 opacity-30 z-0'>
              <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10'>
                Contact <span className='text-pink-600'>Our Clinnic</span>
              </h1>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto relative z-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla facilis, ullam expedita veritatis eius minima maxime saepe assumenda dicta.
              </p>
              <main className='flex flex-col lg:flex-row gap-12'>
                <aside data-aos='fade-up' data-aos-delay='500' className='lg:w-2/5'>
                  <section className='bg-white roundedd-2xl shadow-xl p-8 h-full'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-6'>Get In Touch</h2>
                    <address className='space-y-6'>
                      {
                        
                      }
                    </address>

                  </section>
                </aside>
              </main>
            </div>
          </header>
        </div>
    </article>
  )
}

export default Contact