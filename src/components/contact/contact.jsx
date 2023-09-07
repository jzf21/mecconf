import React from 'react'
import ContactCard from '../contact-card/Contactcard.jsx'
import styles from './contact.module.css'
const contact = () => {
  return (
    <div className={styles.contactbody}>
      <h2 className={styles.contacttitle}>Contact</h2>
      <div className={styles.contactholder}>
        <ContactCard
          name="Stephen Saji Mathew"
          email="stephensajimathew@ieee.org"
          mobile="+917012656996"
          designation=" Chairperson of IEEE MEC CS SBS"
          link="https://www.linkedin.com/in/stephen-mathew-420702206"
        />
        <ContactCard
          name="Jithin Jagadeesh "
          email="jithinjagadeesh1@gmail.com"
          mobile="+919207589302"
          designation="Chairperson of FOSSMEC"
          link="https://www.linkedin.com/in/jithin-jagadeesh"
        />
      </div>
      <div className={styles.contactholder}>
        <ContactCard
          name="Alan Biju"
          email="alanbiju@ieee.org"
          mobile="+917907025154"
          designation="Secretary of IEEE MEC CS SBS"
          link="https://www.linkedin.com/in/alan--biju"
        />
        <ContactCard
          name="Karthik G Kumar"
          email="karthikgkumar.pro@gmail.com"
          mobile="+918848527139"
          designation="Secretary of FOSSMEC"
          link="https://www.linkedin.com/in/karthik-g-kumar"
        />
      </div>
    </div>
  );
}

export default contact