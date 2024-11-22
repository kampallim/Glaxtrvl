import React, { useState } from 'react'
import Model from './Model';

const CallToAction = () => {


    const [modal , setModal]= useState(false);
    const handleclick = ()=>{
        setModal(!modal)
    }
    
  return (
 <>
   <section className="call-to-action">
    <h2>Hurry Up Book your Ticlets</h2>
    <button onClick={handleclick}>Known more</button>
   </section>

   {
    modal && <Model handleclick={handleclick}/>
   }
 </>

  )
}

export default CallToAction
