import React from 'react'
import Navbar from '../../../Components/Nabar/Navbar'
import Header from '../../Header/Header'
import  Footer from '../../../Components/Footer/Footer'
import Contactus from '../Contact/Component/Contactus'
import './Contactstyle.css'
const Contact = () => {
  return (
   <>
   <Navbar/>
   <Header heading="WelCome to Contact page"/>
   <Contactus/>
   <Footer/>
   </>
  )
}

export default Contact
