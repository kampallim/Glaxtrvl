import React, { useState } from "react";
import uparrow from "../../../../assests/uparrow.jpg";
const Faq = () => {
  const Data = [
    {
      question: "question 1?",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto atque minus, nostrum id tempora!",
    },
    {
      question: "question 2?",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto atque minus, nostrum id tempora!",
    },
    {
      question: "question 3?",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto atque minus, nostrum id tempora!",
    },
    {
      question: "question 4?",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto atque minus, nostrum id tempora!",
    },
    {
      question: "question 5?",
      answers:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto atque minus, nostrum id tempora!",
    },
  ];

  const [selected, setSelected] = useState(null);

  const handleselected = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <h1 className="heading">FAQ's</h1>

      <section className="faq">
        <div className="item">
          {Data.map((item, i) => {
            return (
              <div className="wrapper" key={i}>
                <div className="question" onClick={() => handleselected(i)}>
                  <h3>{item.question}</h3>
                  <img
                    src={uparrow}
                    alt=""
                    className={selected === i ? "reverse" : ""}
                  />
                </div>

                <div className={selected === i ? "answers show" : "answers"}>
                  <p>{item.answers}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;
