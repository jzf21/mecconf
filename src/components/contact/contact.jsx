import React from 'react'
import ContactCard from '../contact-card/Contactcard.jsx'
import styles from './contact.module.css'
const contact = () => {
  return (
    <div>
        <h2 className={styles.contacttitle}>Contact</h2>
        <div className={styles.contactholder}>
            <ContactCard
                name='JOHN DOE'
                email="something@gmail.com"
                mobile="1234567890"
            />
            <ContactCard
                name='JOHN DOE'
                email="something@gmail.com"
                mobile="1234567890"
            />
            
        </div>
        <div className={styles.contactholder}>
            <ContactCard
                name='JOHN DOE'
                email="something@gmail.com"
                mobile="1234567890"
            />
            <ContactCard
                name='JOHN DOE'
                email="something@gmail.com"
                mobile="1234567890"
            />
            
        </div>
    </div>
  )
}

export default contact