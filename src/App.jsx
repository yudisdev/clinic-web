import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Hero from './components/Hero'

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
   </>

  )
}

export default App