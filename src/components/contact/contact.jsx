import React from 'react'
import ContactCard from '../contact-card/Contactcard.jsx'
import styles from './contact.module.css'
import Karthik from "../../assets/karthik.png";
import Stephen from "../../assets/stephen.jpg";
import Jithin from "../../assets/jithin.JPG";
import Alan from "../../assets/alan.jpg";
const contact = () => {
  return (
    <div className={styles.contactbody}>
      <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-center text-white">Contact</h2>
      <div className={styles.contactholder}>
        <ContactCard
          name="Stephen Saji Mathew"
          email="stephensajimathew@ieee.org"
          mobile="+917012656996"
          designation=" Chairperson of IEEE MEC CS SBS"
          link="https://www.linkedin.com/in/stephen-mathew-420702206"
          img={Stephen}
          id="1"
        />
        <ContactCard
          name="Jithin Jagadeesh "
          email="jithinjagadeesh1@gmail.com"
          mobile="+919207589302"
          designation="Chairperson of FOSSMEC"
          link="https://www.linkedin.com/in/jithin-jagadeesh"
          img={Jithin}
          id="2"
        />
        
      </div>
      <div className={styles.contactholder}>
        <ContactCard
          name="Alan Biju"
          email="alanbiju@ieee.org"
          mobile="+917907025154"
          designation="Secretary of IEEE MEC CS SBS"
          link="https://www.linkedin.com/in/alan--biju"
          img={Alan}
          id="3"
        />
        <ContactCard
          name="Karthik G Kumar"
          email="karthikgkumar.pro@gmail.com"
          mobile="+918848527139"
          designation="Secretary of FOSSMEC"
          link="https://www.linkedin.com/in/karthik-g-kumar"
          img={Karthik}
          id="4"
        />
      </div>
    </div>
  );
}

export default contact