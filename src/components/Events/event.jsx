import React from 'react'
import styles from './event.module.css'
const event = () => {
  return (
    <div className={styles.eventbody}>
        <h2 className={styles.eventtitle}>EVENTS</h2>
        <div className={styles.eventsbody}>
        <p className={styles.events}>OPEN HACK</p>
        <p className={styles.events}>CODE CLASH 23&#39;</p>
        <p className={styles.events}>TECH SHOWCASE</p>
        <p className={styles.events}>MENTORSHIP PROGRAM</p>
        <p className={styles.events}>SPEAKER SESSIONS</p>
      
        </div>
    </div>
  )
}

export default event
