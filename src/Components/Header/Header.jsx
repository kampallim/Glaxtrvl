import React from 'react'
import headerimg from '../../assests/headerimg.jpg'
import './Header.css'
const Header = ({heading}) => {
  return (
    <>
    <section className="header" style={{backgroundImage:`url(${headerimg})`, backgroundSize:"cover", backgroundPosition:"fixed" }}>
        <h1>{heading}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quaerat?</p>
    </section>
    </>
  )
}

export default Header
