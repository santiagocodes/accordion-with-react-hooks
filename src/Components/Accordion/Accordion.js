import React, { useState, useRef } from 'react';
import './Accordion.css';

export default function Accordion({ id, title, body }) {
  const [setOpen, setOpenState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const bodyRef = useRef(null);

  const toggleAccordion = () => {
    setOpenState(setOpen === "" ? "active" : "");
    setHeightState(setOpen === "active" ? "0px" : `${bodyRef.current.scrollHeight}px`);
    setRotateState(setOpen === "active" ? "accordion__icon" : "accordion__icon rotate");
  }

  return (
    <article className="accordion__article">
        <header className={`accordion ${setOpen}`} onClick={toggleAccordion}>
            <h2 className="accordion__title">
                {title}
            </h2>
            <button className={`accordion__icon ${setRotate}`} >
                <img src="https://img.icons8.com/fluent-systems-regular/24/000000/chevron-down.png" alt="chevron arrow from icons8.com"/>
            </button>
        </header>
        <div ref={bodyRef} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
            <p className="accordion__text">
                {body}
            </p>
        </div>
    </article>
  );
}
