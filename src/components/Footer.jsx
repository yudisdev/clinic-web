import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdAccessTime, MdLocationOn, MdPhone } from "react-icons/md";

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
                info@gmail.com
            </a>
        },
        {
            icon: <MdAccessTime className="text-pink-500 text-xl mt-1 mr-4 flex-shrink-0"/>,
            content: <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                info@gmail.com
            </a>
        }
    ]

    return (
        <div>

        </div>
    )
}

export default Footer;