import heroo from '../assets/Heroo.jpg'

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
                    <aside className='py-4'>
                        <ul className='flex flex-wrap justify-center gap-4 md:gap-8 text-center'>
                            {stats.map((stats, index)=> (
                                <li key={index} className='px-2'>
                                    <strong className='text-2xl font-bold text-pink-600'>{stats.value}</strong>
                                    <small className='block text-sm text-gray-600'>{stats.label}</small>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
                <figure className='md:w-1/2 flex justify-center'>
                    <div className='relative w-full max-w-md'>
                        <span className='bg-pink-500 rounded-full w-80 h-80 absolute -top-10 -left-10 opacity-20'
                        aria-hidden='true'>
                        </span>
                        <span className='bg-purple-400 rounded-full w-64 h-64 absolute -bottom-10 -right-10 opacity-20'
                        aria-hidden='true'>
                        </span>
                        <img src={heroo} alt="cosmetic treatment" 
                        className='relative z-10 rounded-full shadow-2xl w-full max-w-xs md:max-w-sm object-cover'
                        width='400'
                        height='400'
                        loading='eager'
                        />

                    </div>
                </figure>
            </article>
        </section>
   </div>
  )
}

export default Hero