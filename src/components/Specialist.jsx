import React from 'react'
import SpecialistImg from '../assets/SpecialistImg.png'

const Specialist = () => {
    const specialists = [
        {   
            id: 1, 
            name: 'Sulam Alis Natural', 
            image: BrowImg, 
            bio: 'Teknik sulam alis yang menghasilkan tampilan natural, rapi, dan sesuai bentuk wajah. Menggunakan bahan aman dan metode modern agar hasilnya tahan lama tanpa rasa sakit.',
            rating: 5,
        },
        {   
            id: 2, 
            name: 'Nail Art', 
            image: NailArtImg, 
            bio: 'Kreasikan kuku cantikmu dengan berbagai desain nail art, mulai dari yang simple hingga elegan. Hasil rapi, warna tahan lama, dan bisa disesuaikan dengan gaya kamu.',
            Rating: 5,
        },
        {   
            id: 3, 
            name: 'Perawatan Kuku', 
            image: NailCareImg, 
            bio: 'Perawatan kuku lengkap untuk menjaga kuku tetap sehat, bersih, dan cantik. Cocok untuk kamu yang ingin kuku terawat setiap saat.',
            rating: 5,
        },

    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            i < rating ?
            <FaStar key={i} className='text-yellow-400 inline' aria-hidden='true'/> : 
            <FaRagStar key={i} className='text-yellow-400 inline' aria-hidden='true'/>
        ));
    };

  return (
    <section id='specialists' className='py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100'>
        <div className='container mx-auto px-4'>
            <header data-aos='fade-up' data-aos-delay='400' className='text-center mb-16 relative'>
                <span className='absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20
                rounded-full bg-pink-100 opacity-30 z-0'></span>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10'>
                    Bertemu dengan <span className='text-pink-600'>Pemilik</span>
                </h2>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto relative z-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eum?
                </p>
                <span className='absolute -bottom-6 right-1/4 w-1/6 h-1/6 rounded-full bg-purple-100
                opacity-20' aria-hidden='true'></span>
            </header>
            <ul data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-8 mb-16'>
                {specialists.map((doctor) => (
                    <li key={doctor.id} className='group relative'>
                        <article className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl
                        transition-all duration-300 h-full'>
                            <figure className='relative h-80 overflow-hidden'>
                                <img src={doctor.image}
                                className='w-full h-full object-cover transition-transform duration-500
                                group-hover:scale-105'
                                loading='lazy' />
                                <span className='absolute insert-0 bg-gradient-to-t from-black/60
                                to-transparent' aria-hidden='true'></span>
                                <aside className=''></aside>
                            </figure>
                        </article>
                    </li>
                ))}
            </ul>
        </div>

    </section>
  )
}

export default Specialist