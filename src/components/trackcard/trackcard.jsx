/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styles from "./trackcard.module.css"
import Image from 'next/image';
import { useState } from 'react';
import Track1 from "../../assets/track1.png"
function trackcard(props)
{
    const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }
  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalbox}>
            <div className={styles.modalcontent}>
                <h2 className={styles.modaltitle}>Gen AI</h2>
                <p className={styles.modaltext}>Gen AI is a track that focuses on the development of AI models that can be used to solve real-world problems. The participants are expected to develop a model that can be used to solve a problem statement that will be provided to them. The participants are expected to submit a report of their model and a video explaining their model.</p>
                <button className={styles.closemodal} onClick={toggleModal}>
                {/* <AiOutlineClose size={24} /> */}X
              </button>
            </div>
            </div>
        
    </div>
      
  )
  }
    <div className={styles.trackcard}>
            <Image className={styles.trackcardimg}src={props.img} alt="Fintech"  />
            <div className={styles.trackcardtext}>
              <h3 className={styles.trackcardtitle}>Prize</h3>
              <h3 className={styles.trackcardfees}>{props.fees}</h3>
            </div>
            {/* <button onClick={toggleModal} className={styles.morebtn}>Read More</button> */}
          </div>
  </>
  )
}   

export default trackcard;
  
