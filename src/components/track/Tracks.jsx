import React from 'react'
import styles from "./tracks.module.css"
import Image from 'next/image';
import Fintech from "../../assets/fintech.svg" 
import Blockchain from "../../assets/blockchain.svg" 
import AI from "../../assets/AI.svg" 

const Tracks = () => {
  return (
   <div className={styles.trackbody}>
        <h2 className={styles.tracktitle}>TRACKS AND PRIZES</h2>
        <div className={styles.trackcontainer}>
          <div className={styles.trackcard}>
            <Image src={Blockchain} alt="Blockchain"  />
            <h3 className={styles.trackcardtitle}>Blockchain</h3>
          </div>
          <div className={styles.trackcard}>
            <Image src={Fintech} alt="Fintech"  />
            <h3 className={styles.trackcardtitle}>Fintech</h3>
          </div>
          <div className={styles.trackcard}>
            <Image src={AI} alt="GEN AI"  />
            <h3 className={styles.trackcardtitle}>Gen AI</h3>
          </div>
            



        </div>

   </div>
  );
}

export default Tracks