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
          
                </div>
            </article>
        </section>
   </div>
  )
}

export default Hero