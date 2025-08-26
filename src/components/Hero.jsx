import React from 'react'

const Hero = () => {
    const stats = [
        {value:"2,500+", label:"Happy Clients"},
        {value:"15+", label:"Specialists"},
        {value:"50+", label:"Treatments"},
        {value:"3+", label:"Years"},
    ];
  return (
   <div>
        <section id='home' className='relative overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100'>
            <article className='container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center'>
                <div className='md:w-1/2 mb-10 md:mb-0 '>
                    <hgroup>
                        <h1 className='text-4xl md:text-5xl ld:text-6xl font-bold text-gray-800 mb-4 '>
                            Enhance Your Natural <mark className='text-pink-600 bg-transparent'>Beauty</mark>
                        </h1>
                        <p className='text-lg text-gray-600 mb-8 max-w-lg'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nesciunt possimus ut dolor corporis sit, quod quae dolores sapiente beatae?
                        </p>
                    </hgroup>
                    <nav className='flex flex-col sm:flex-row gap-4 mb-12'>
                        <a href="#appointment"
                        className='bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full
                        text-center transition shadow-lg'
                        aria-label='Book a consulation'>
                            Book a Consulation
                        </a>
                        <a href="#services"
                        className='border border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full
                        text-center transition'
                        aria-label='Explore our services'>
                            Explore Services
                        </a>
                    </nav>
                </div>
            </article>
        </section>
   </div>
  )
}

export default Hero