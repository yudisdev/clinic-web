import React from "react";
import { FaClinicMedical, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdAccessTime, MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
    const sociallinks = [
        {icon: <FaFacebookF classname="text-lg"/>, label: "Facebook", href: "#"},
        {icon: <FaInstagram classname="text-lg"/>, label: "Facebook", href: "#"},
        {icon: <FaWhatsapp classname="text-lg"/>, label: "Facebook", href: "#"},
    ]

    const quiclinks = [
        {text: "Home", href: "#"},
        {text: "About Us", href: "#"},
        {text: "Our Services", href: "#"},
        {text: "Our Specialist", href: "#"},
        {text: "Contact Us", href: "#"},
    ]

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
                +62387392398
            </a>
        },
        {
            icon: <MdEmail className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0"/>,
            content: <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                info@gmail.com
            </a>
        },
        {
            icon: <MdAccessTime className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0"/>,
            content: <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                Sun-Thu: 9AM-9PM, Fri: 2PM-9PM
            </a>
        }
    ];

    const legalLinks = [
        {text:"Privacy Policy", href: "#"},
        {text:"Terms of Service", href: "#"},
        {text:"Sitemap", href: "#"},
    ];




    return (
        <Footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <section className="lg:col-span-2">
                        <header className="flex items-center mb-6">
                            <FaClinicMedical className="texct-3xl text-pink-500 mr-3" arial-hidden='true'/>
                            <h2 className="text-2xl font-bold">Dinda Beauty Care</h2>
                        </header>
                        <p className="text-gray-400 mb-6">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, exercitationem repellat
                             eaque molestiae, atque asperiores minima excepturi consectetur, et sit ullam quidem laboriosam esse. Nostrum amet officia fugit reprehenderit ipsum?
                        </p>
                        <nav aria-label="social media links">
                            <ul className="flex space-x-4">
                                {sociallinks.map((link, index)=>(
                                    <li key={index}>
                                        <a href="#"
                                        className="bg-gray-800 hover:bg-pink-600 h-10 w-10 rounded-full flex
                                        items-center justify-center transition"
                                        aria-label={item.label}>
                                            {item.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute aftrer:left-0 
                        after:bottom-0 after:w-12 after:h-1 after:bg-pink-500">
                            Quick Links
                        </h3>
                        <nav></nav>
                    </section>
                </div>
            </div>
        </Footer>
    )
}

export default Footer;