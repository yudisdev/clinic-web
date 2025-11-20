import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'
import contactImg from '../assets/contactimg.png'
import React from 'react'

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
        <div className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-2/4 h-24 rounded-full
        bg-pink-100 opacity-30 z-0'>  {/* <- pverbaikan typo -trasnlate-x-1/2 */}
        </div>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10'>
            Contact <span className='text-pink-600'>Our Clinnic</span>
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto relative z-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla facilis, ullam expedita veritatis eius minima maxime saepe assumenda dicta.
          </p>
      </header>
          <main className='flex flex-col lg:flex-row gap-12'>
            <aside data-aos='fade-up' data-aos-delay='500' className='lg:w-2/5'>
              <section className='bg-white rounded-2xl shadow-xl p-8 h-full'> {/* <- perbaikan typo roundedd-2xl */}
                <h2 className='text-2xl font-bold text-gray-800 mb-6'>Get In Touch</h2>
                <address className='space-y-6'>
                  {contactItems.map((item, index) => (
                    <article key={index} className='flex items-start'>
                      <figure className='bg-pink-100 p-3 rounded-full mr-4 flex-shrink-0'>
                        {item.icon}
                      </figure>
                      <div>
                        <h3 className='font-medium text-gray-800 mb-1'>{item.title}</h3>
                        {item.content}
                      </div>
                    </article>
                  ))}
                </address>
                <figure className='mt-8 rounded-xl overflow-hidden shadow-md'>
                  <img 
                  src={contactImg} 
                  className='w-full h-48 object-cover hover:scale-105 transition-transform duration-500'
                  width='200'
                  loading='lazy' />
                </figure>
              </section>
            </aside>
            <section data-aos='fade-up' data-aos-delay='600' className='lg:w-3/5'>
             <div className='bg-white rounded-2xl shadow-xl p-8 h-full'>
              <h2 className='text-2xl font-bold text-gray-800 mb-6'>Send Us a Message</h2>
              <form className='space-y-6'>
                <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>Nama</label>
                      <input
                      type='text'
                      id='name'
                      name='name'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-pink-500 focus:border-transparent' 
                      placeholder='Your name'
                      required/>
                    </div>
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>Nomor Telefon</label>
                      <input
                      type='tel'
                      id='phone'
                      name='phone'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-pink-500 focus:border-transparent' 
                      placeholder='+62-XXXX-XXXX'
                      required/>
                    </div>
                </fieldset>
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>Alamat Email</label>
                      <input
                      type='email'
                      id='email'
                      name='email'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-pink-500 focus:border-transparent' 
                      placeholder='nama@email.com'
                      required/>
                    </div>
                    <div>
                      <label className='block text-gray-700 font-medium mb-2'>Tertarik Pada Layanan Kami</label>
                      <select
                      id='service'
                      name='service'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-pink-500 focus:border-transparent' 
                      required>
                      <option value="">Pilih layanan</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}> {/* <- perbaikan services.value -> service.value */}
                          {service.label}
                        </option>
                      ))}
                      </select>
                    </div>
                      <div>
                        <label className='block text-gray-700 font-medium mb-2'>Pesan Anda</label>
                        <textarea
                        id='message'
                        name='message'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                        focus:ring-pink-500 focus:border-transparent' 
                        placeholder='Beri Kami Pertanyaan'
                        required/>
                      </div>
                      <div className="">
                        <button type='submit'
                        className='bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full
                        transition shadow-lg w-full md:w-auto'
                        aria-label='Masukan Pesan Anda'>
                          Kirim Pesan
                        </button>
                      </div>
                 </form>
              </div>
            </section>
          </main>
          <figure data-aos='fade-up' data-aos-delay='600' 
          className='mt-16 bg-white rounded-2xl shadow-xl overflow-hidden'>
            <iframe 
             src="https://maps.app.goo.gl/5iaC66KaEq8p8fT88"
             width="100%"
             height="450"
             style={{border:0}}
             allowFullScreen=''
             loading='lazy'
             title='Clinic location map'
             className='rounded-2xl'
             aria-label='melihatkan lokasi map'></iframe>
          </figure>
    </div>
</article>

  )
}

export default Contact