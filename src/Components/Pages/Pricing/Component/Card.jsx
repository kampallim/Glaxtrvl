import React from 'react'
import Singlecard from './Singlecard'

const Card = () => {
  return (
  <>
  <h1 className='heading'>Pricing</h1>
     
     <div className="cards">
         <Singlecard/>
         <Singlecard/>
         <Singlecard/>
         
     </div>
  </>
    
  )
}

export default Card
