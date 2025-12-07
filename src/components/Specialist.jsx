import React from 'react';
import SpecialistsImg from '../assets/SpecialistsImg.png';
import SpecialistsImg1 from '../assets/SpecialistsImg1.png';
import SpecialistsImg2 from '../assets/SpecialistsImg2.png';
import Dinda1 from '../assets/Dinda1.jpg';
import Dinda3 from '../assets/Dinda3.jpg';
import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';

const data = [
  {
    id: 1,
    name: 'Sulam Alis Natural',
    image: SpecialistsImg,
    bio: 'Teknik sulam alis yang menghasilkan tampilan natural, rapi, dan sesuai bentuk wajah. Menggunakan bahan aman dan metode modern agar hasilnya tahan lama tanpa rasa sakit.',
    rating: 5,
    specialties: ['Natural Look', 'Long Lasting', 'Safe'],
  },
  {
    id: 2,
    name: 'Nail Art',
    image: Dinda1,
    bio: 'Kreasikan kuku cantikmu dengan berbagai desain nail art, mulai dari yang simple hingga elegan. Hasil rapi, warna tahan lama, dan bisa disesuaikan dengan gaya kamu.',
    rating: 5,
    specialties: ['Minimalist', 'Elegant', 'Trendy'],
  },
  {
    id: 3,
    name: 'Perawatan Kuku',
    image: Dinda3,
    bio: 'Perawatan kuku lengkap untuk menjaga kuku tetap sehat, bersih, dan cantik. Cocok untuk kamu yang ingin kuku terawat setiap saat.',
    rating: 5,
    specialties: ['Manicure', 'Pedicure', 'Nail Health'],
  },
];

const renderStars = (rating = 0) =>
  [...Array(5)].map((_, i) =>
    i < Math.round(rating) ? (
      <FaStar key={i} className="text-yellow-400 inline" aria-hidden="true" />
    ) : (
      <FaRegStar key={i} className="text-yellow-400 inline" aria-hidden="true" />
    ),
  );

const Specialist = () => {
  const specialists = data; // bisa diganti prop bila perlu

  return (
    <section
      id="specialists"
      className="py-20 overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16 relative"
        >
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-pink-100 opacity-30 z-0"
            aria-hidden="true"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
            Bertemu dengan <span className="text-pink-600">Pemilik</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eum?
          </p>
          <span
            className="absolute -bottom-6 right-1/4 w-1/6 h-1/6 rounded-full bg-purple-100 opacity-20"
            aria-hidden="true"
          />
        </header>

        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {specialists.map((doctor) => (
            <li key={doctor.id} className="group relative">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <figure className="relative h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    aria-hidden="true"
                  />
                  <aside
                    className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center shadow-sm"
                    aria-label={`Rating: ${doctor.rating} stars`}
                  >
                    {renderStars(doctor.rating)}
                    <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                  </aside>
                </figure>

                <div className="p-6 relative -mt-10">
                  <div className="bg-pink-200 rounded-lg shadow-md p-6">
                    <header>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                    </header>
                    <p className="text-gray-600 mb-4">{doctor.bio}</p>

                    <ul className="flex flex-wrap gap-2 mb-4">
                      {(doctor.specialties ?? []).map((spec, i) => (
                        <li key={i}>
                          <span className="bg-pink-50 text-pink-600 text-xs font-medium px-3 py-1 rounded-full">
                            {spec}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <figure
                      className="absolute -top-6 left-6 bg-pink-600 text-white p-3 rounded-full shadow-lg"
                      aria-hidden="true"
                    >
                      <FaQuoteLeft className="text-lg" />
                    </figure>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <aside
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <span
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-pink-200 opacity-20"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-pink-200 opacity-20"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Siap untuk konsultasi dengan kami?
            </h3>
            <p className='text-lg text-gray-600 mb-8 max-w-2xl  mx-auto'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, corrupti.
            </p>
            <nav className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2"
                aria-label="Pesan Sekarang"
              >
                Pesan Jadwal
              </a>
              <a
                href="#"
                className="border border-pink-600 hover:bg-pink-50 text-pink-600 px-8 py-3 rounded-full transition shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                aria-label="Hubungi Kami"
              >
                Hubungi Kami
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Specialist;
