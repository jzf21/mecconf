import React from 'react'
import styles from './Contactcard.module.css'
function Contactcard(props) {
  return (
    <>
    <div className={styles.contactcard}>
        
        <h3 className={styles.contactname}>{props.name}</h3>
        <h3 className={styles.contactemail}>{props.email}</h3>
        <h3 className={styles.contactmobile}>{props.mobile}</h3>
    </div>
    </>
  )
}

export default Contactcard