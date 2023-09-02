import React from 'react'
import styles from './faqcard.module.css'
import { useState } from 'react'

function Faqcard(props) {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.faqcardbody}>
      <div className={styles.faqcardcontent}>
      <p className={styles.faqcardquestion}>{props.question}</p>
      
      {open && <p className={styles.faqcardanswer}>{props.answer}</p>}
      
    </div>
    <div className={styles.faqcardopen} onClick={toggleOpen}>
        
    </div>
    </div>
  )
}

export default Faqcard
