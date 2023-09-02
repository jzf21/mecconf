import React from 'react'
import styles from './faqcard.module.css'
import { useState } from 'react'

function faqcard(props) {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.faqcardbody}>
      <div className={styles.faqcardcontent}>
      <p className={styles.faqcardquestion}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam perspiciatis iste sapiente maxime temporibus sequi expedita quam unde repudiandae!</p>
      
      {open && <p className={styles.faqcardanswer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam perspiciatis iste sapiente maxime temporibus sequi expedita quam unde repudiandae!</p>}
      
    </div>
    <div className={styles.faqcardopen} onClick={toggleOpen}>
        
    </div>
    </div>
  )
}

export default faqcard
