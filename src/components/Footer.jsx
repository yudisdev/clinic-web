import React from "react";
import { FaClinicMedical, FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { MdAccessTime, MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
    const socialLinks = [
        {icon: <FaFacebookF className="text-lg"/>, label: "Facebook", href: "#"},
        {icon: <FaInstagram className="text-lg"/>, label: "Instagram", href: "#"},
        {icon: <FaWhatsapp className="text-lg"/>, label: "Whatsapp", href: "#"},
    ];

    const quickLinks = [
        {text: "Beranda", href: "#"},
        {text: "Tentang", href: "#"},
        {text: "Layanan", href: "#"},
        {text: "Spesialis", href: "#"},
        {text: "Hubungi Kami", href: "#"},
    ];

    const contactinfo = [
        {
            icon: <MdLocationOn className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0"/>,
            content: <a href="#" className="text-gray-400 hover:text-pink-500 transition" >
                Perumahan taman buana permai, block C no 9. Denpasar, Bali.
            </a> 
        },
        {
            icon: <MdPhone className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0"/>,
            content: <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                +6281238928001
            </a>
        },
        {
            icon: <MdEmail className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0"/>,
            content: <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                dindabeautycare1@gmail.com
            </a>
        },
        {
            icon: <MdAccessTime className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0"/>,
            content: <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                Senin - Sabtu: 09:00 - 21:00 
            </a>
        }
    ];

    const legalLinks = [
        {text:"Privacy Policy", href: "#"},
        {text:"Terms of Service", href: "#"},
        {text:"Sitemap", href: "#"},
    ];

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Left section */}
                    <section className="lg:col-span-2">
                        <header className="flex items-center mb-6">
                            <FaClinicMedical className="text-3xl text-pink-500 mr-3" aria-hidden="true"/>
                            <h2 className="text-2xl font-bold">Dinda Beauty Care</h2>
                        </header>

                        <p className="text-gray-400 mb-6">
                            Layanan sulam alis dan perawatan kuku untuk tampilan yang rapi, cantik, dan tahan lama.
                        </p>

                        <nav aria-label="social media links">
                            <ul className="flex space-x-4">
                                {socialLinks.map((link, index)=>(
                                    <li key={index}>
                                        <a 
                                            href={link.href}
                                            className="bg-gray-800 hover:bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center transition"
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>

                    {/* Quick Links */}
                    <section>
                        <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500">
                            Quick Links
                        </h3>
                        <nav aria-label="Quick Links">
                            <ul className="space-y-3">
                                {quickLinks.map((link, index)=>(
                                    <li key={index}>
                                        <a href={link.href} className="text-gray-400 hover:text-pink-500 transition">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>

                    {/* Contact */}
                    <address>
                        <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-pink-500">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            {contactinfo.map((info, index)=> (
                                <li key={index} className="flex items-start">
                                    {info.icon}
                                    {info.content}
                                </li>
                            ))}
                        </ul>
                    </address>
                </div>

                {/* Newsletter */}
                <section className="bg-gray-800 rounded-xl p-8 mb-12" aria-labelledby="newsletter-heading">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        
                        <div className="mb-6 lg:mb-0 lg:mr-8">
                            <h3 id='newsletter-heading' className="text-xl font-bold mb-2">
                                Subscribe to our Newsletter
                            </h3>
                            <p className="text-gray-400">Get update on special offers and beauty tips</p>
                        </div>

                        <form className="flex flex-col sm:flex-row w-full lg:w-auto" aria-label='Newsletter sub form'>
                            <label className="sr-only">Your email address</label>

                            <input 
                                type="email"
                                placeholder="Your email address"
                                className="px-6 py-3 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 mb-3 sm:mb-0 sm:mr-3 w-full"
                                required 
                            />

                            <button
                                type="submit"
                                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition shadow-lg whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>

                {/* Bottom */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Dinda Beauty Care. All rights reserved.
                    </p>

                    <nav aria-label="legal links">
                        <ul className="flex space-x-6">
                            {legalLinks.map((link, index)=>(
                                <li key={index}>
                                    <a href={link.href} className="text-gray-500 hover:text-pink-600 text-sm transition">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
