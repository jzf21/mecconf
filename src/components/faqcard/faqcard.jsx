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
        <p className="text-xl">{props.question}</p>

        {open && <p className="text-sm p-2">{props.answer}</p>}
      </div>
      {!open && <div className={styles.faqcardopen}></div>}

      {open && (
        <button className={styles.faqcardclose} onClick={toggleOpen}>
          X
        </button>
      )}
    </div>
  );
}

export default Faqcard
