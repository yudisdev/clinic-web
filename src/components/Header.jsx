import React, { useState } from 'react'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  const navLinks = [
    {href:'#home', label:'#Home'},
    {href:'#services', label:'#Services'},
    {href:'#about', label:'#About'},
    {href:'#speccialists', label:'#Speccialists'},
    {href:'#contact', label:'#Contact'},
  ]
  
  return (
    <div>Header</div>
  )
}

export default Header