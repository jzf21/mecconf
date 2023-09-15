"use client"
import React from 'react'
import styles from "./tracks.module.css"
import Image from 'next/image';
import Fintech from "../../assets/fintech.svg" 
import Foss from "../../assets/foss1.svg" 
import AI from "../../assets/ai.svg" 
import Track1 from "../../assets/track1.png"
import Trackcard from "../trackcard/trackcard"
import Karthik from "../../assets/karthik.png";
import First from "../../assets/1st1.png";
import Third from "../../assets/3rd1.png";
import Second from "../../assets/2nd1.png";

const Tracks = () => {
  
  
  return (
    
   <div id="tracks"className={styles.trackbody}>
        <h2 className={styles.tracktitle}>PRIZES</h2>
        <div className={styles.trackcontainer}>
        {/* <div className={styles.trackcard}>
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
            <button onclick={toggleModal} className={styles.morebtn}>Read More</button>
          </div> */}
        {/* <Trackcard img={Second} title="Foss" fees="Rs.10,000" />
        <Trackcard img={First} title="Foss" fees="Rs.20,000" />
        <Trackcard img={Third} title="Foss" fees="Rs.5,000" /> */}
        <div className={`${styles.trackcard} ${styles.mobileOrder2}`}>
    <Image priority={true} className={styles.trackcardimg1} src={First} alt="first" />
    <div className={styles.trackcardtext}>
      <h3 className={styles.trackcardtitle}>Prize</h3>
      <h3 className={styles.trackcardfees}>Rs.7,500</h3>
    </div>
  </div>

  {/* Second Prize */}
  <div className={`${styles.trackcard} ${styles.mobileOrder1}`}>
    <Image priority={true} className={styles.trackcardimg} src={Second} alt="second" />
    <div className={styles.trackcardtext}>
      <h3 className={styles.trackcardtitle}>Prize</h3>
      <h3 className={styles.trackcardfees}>Rs.5,000</h3>
    </div>
  </div>

  {/* Third Prize */}
  <div className={`${styles.trackcard} ${styles.mobileOrder3}`}>
    <Image priority={true} className={styles.trackcardimg3} src={Third} alt="third" />
    <div className={styles.trackcardtext}>
      <h3 className={styles.trackcardtitle}>Prize</h3>
      <h3 className={styles.trackcardfees}>Rs.2,500</h3>
    </div>
  </div>

        </div>

   </div>
  );
}

export default Tracks