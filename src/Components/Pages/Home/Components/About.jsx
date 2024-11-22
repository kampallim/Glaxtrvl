import React from "react";
import spacephoto from "../../../../assests/spacephoto.jpg";
const About = ({heading}) => {
  return (
    <>
    <h1 className="heading">{heading}</h1>
      <section className="about">
        <img src={spacephoto} alt="spacephoto" />
        <div className="contents">
          <h1>Lorem, ipsum.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit unde pariatur saepe cum quas inventore neque vero
            culpa, placeat quidem est, impedit laboriosam quaerat assumenda
            dicta tempora dolorum nisi asperiores. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Reprehenderit unde pariatur saepe cum
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit unde pariatur saepe cum quas inventore neque vero
            culpa, placeat quidem est, impedit laboriosam quaerat assumenda
            dicta tempora dolorum nisi asperiores.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
