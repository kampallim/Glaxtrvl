import React from "react";
import { FaTimes } from "react-icons/fa";

const Model = ({handleclick}) => {
  return (
    <>
      <div className="overlay">
        <div className="modal">
            <div className="cross">
            <FaTimes style={{color:"white"}} size={25} onClick={handleclick}/>
            </div>
         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, laboriosam!</h1>
        </div>
      </div>
    </>
  );
};

export default Model;
