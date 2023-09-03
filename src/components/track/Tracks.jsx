import React from 'react'
import styles from "./tracks.module.css"
import Image from 'next/image';
import Fintech from "../../assets/fintech.svg" 
import Foss from "../../assets/foss1.svg" 
import AI from "../../assets/ai.svg" 

const Tracks = () => {
  return (
   <div className={styles.trackbody}>
        <h2 className={styles.tracktitle}>TRACKS AND PRIZES</h2>
        <div className={styles.trackcontainer}>
          <div className={styles.trackcard}>
            <Image src={Foss} alt="Foss"  />
            <h3 className={styles.trackcardtitle}>Foss</h3>
            <h3 className={styles.trackcardfees}>Fees</h3>
          </div>
          <div className={styles.trackcard}>
            <Image src={Fintech} alt="Fintech"  />
            <h3 className={styles.trackcardtitle}>Fintech</h3>
            <h3 className={styles.trackcardfees}>Fees</h3>
          </div>
          <div className={styles.trackcard}>
            <Image src={AI} alt="GEN AI"  />
            <h3 className={styles.trackcardtitle}>Gen AI</h3>
            <h3 className={styles.trackcardfees}>Fees</h3>
          </div>
            



        </div>

   </div>
  );
}

export default Tracks