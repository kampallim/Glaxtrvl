import React from "react";

const Contactus = () => {
  return (
    <>
      <h1 className="heading">Contact us</h1>
      <div className="container">
        <form>
          <div className="field">
            <p>Name</p>
            <input type="text" />
          </div>
          <div className="field">
            <p>Email</p>
            <input type="email" />
          </div>
          <div className="field">
            <p>Phone Number</p>
            <input type="number" />
          </div>

          <div className="btn">
            <button>submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contactus;
