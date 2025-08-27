import heroo from '../assets/Heroo.jpg'

const Hero = () => {
    const stats = [
        {value:"1,000+", label:"Klien Puas"},
        {value:"15+", label:"Brow Artist Profesional"},
        {value:"10+", label:"Pilihan Gaya"},
        {value:"3+", label:"Tahun Pengalaman"},
    ];
  return (
   <div>
        <section id='beranda' className='relative overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100'>
            <article className='container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center'>
                <div className='md:w-1/2 mb-10 md:mb-0 '>
                    <hgroup data-aos="fade-up"
                            data-aos-duration="2000">
                        <h1 className='text-4xl md:text-5xl ld:text-6xl font-bold text-gray-800 mb-4 '>
                            Enhance Your Natural <mark className='text-pink-600 bg-transparent'>Beauty</mark> {/*tingkatkan kecantikan alami anda*/}
                        </h1>
                        <p className='text-lg text-gray-600 mb-8 max-w-lg'>
                            Dapatkan alis yang rapi, natural, dan tahan lama dengan teknik sulam alis profesional. Bikin penampilanmu makin percaya diri setiap hari.
                        </p>
                    </hgroup>
                    <nav data-aos="fade-up"
                         data-aos-duration="2500" className='flex flex-col sm:flex-row gap-4 mb-12'>
                        <a href="#pesanjadwal"
                        className='bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full
                        text-center transition shadow-lg'
                        aria-label='Book a consulation'>
                            Pesan Jadwal Sekarang
                        </a>
                        <a href="#layanan"
                        className='border border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full
                        text-center transition'
                        aria-label='Explore our services'>
                            Lihat Layanan
                        </a>
                    </nav>
                    <aside data-aos="fade-up"
                         data-aos-duration="3000" className='py-4'>
                        <ul className='flex flex-wrap justify-center gap-5 md:gap-6 text-center'>
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