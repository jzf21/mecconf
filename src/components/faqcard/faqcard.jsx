"use client"
import React from 'react'
import styles from './faqcard.module.css'
import { useState } from 'react'

function Faqcard(props) {
  const [open, setOpen] = useState(false)
  
  const toggleOpen = () => {
    setOpen(!open);
  };
  
  
  return (
    <div className={styles.faqcardbody} onClick={toggleOpen}>
      <div className={styles.faqcardcontent}>
        
        <p className="text-white font-normal  font-sans text-sm lg:text-xl">{props.question}</p>

        {open && <p className="text-white font-normal  font-sans text-sm lg:text-xl p-2">{props.answer}</p>}
      </div>
      {!open && (<div><button className={styles.faqcardopen} onClick={toggleOpen}>
          +
        </button></div>)}

      {open && (
        <button className={styles.faqcardclose} onClick={toggleOpen}>
          X
        </button>
      )}
    </div>
  );
}

export default Faqcard
