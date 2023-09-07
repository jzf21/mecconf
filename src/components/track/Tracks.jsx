import React from 'react'
import styles from "./tracks.module.css"
import Image from 'next/image';
import Fintech from "../../assets/fintech.svg" 
import Foss from "../../assets/foss1.svg" 
import AI from "../../assets/ai.svg" 
import Track1 from "../../assets/track1.png"

const Tracks = () => {
  return (
    
   <div className={styles.trackbody}>
        <h2 className={styles.tracktitle}>TRACKS AND PRIZES</h2>
        <div className={styles.trackcontainer}>
        <div className={styles.trackcard}>
            <Image className={styles.trackcardimg}src={Track1} alt="Fintech"  />
            <div className={styles.trackcardtext}>
              <h3 className={styles.trackcardtitle}>Foss</h3>
              <h3 className={styles.trackcardfees}>Rs.10,000</h3>
            </div>
            <button className={styles.morebtn}>Read More</button>
          </div>
          <div className={styles.trackcard}>
            <Image className={styles.trackcardimg}src={Track1} alt="Fintech"  />
            <div className={styles.trackcardtext}>
              <h3 className={styles.trackcardtitle}>Fintech</h3>
              <h3 className={styles.trackcardfees}>Rs.10,000</h3>
            </div>
            <button className={styles.morebtn}>Read More</button>
          </div>
          <div className={styles.trackcard}>
            <Image className={styles.trackcardimg}src={Track1} alt="Fintech"  />
            <div className={styles.trackcardtext}>
              <h3 className={styles.trackcardtitle}>Gen AI</h3>
              <h3 className={styles.trackcardfees}>Rs.10,000</h3>
            </div>
            <button className={styles.morebtn}>Read More</button>
          </div>

        </div>

   </div>
  );
}

export default Tracks