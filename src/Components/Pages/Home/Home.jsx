import Navbar from '../../Nabar/Navbar'
import Hero from './Components/Hero'
import '../Home/HomeStyle.css'
import About from './Components/About'
import Services from './Components/Services'
import CallToAction from './Components/CallToAction'
import Faq from './Components/Faq'
import Footer from '../../Footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About heading="About us"/>
        <Services/>
        <CallToAction/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Home
