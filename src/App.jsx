import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'

const App = () => {
  useEffect (()=>{
    AOS.init({
      duration: 3000,
      once: true,
    });
  },[]);

  return (
   <> 
   <Header/>
   <Hero/>
   <Services/>
   <About/>
   </>

  )
}

export default App