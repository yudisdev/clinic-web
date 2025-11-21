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
                            
                        </p>
                    </section>
                </div>
            </div>
        </Footer>
    )
}

export default Footer;