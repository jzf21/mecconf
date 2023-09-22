import React from 'react'
import styles from './Sponser.module.css'
import Image from 'next/image'
import Alg from "../../assets/sponser.png"
import Voice from "../../assets/voiceflow.png"
import Xyz from "../../assets/dotxyz.png"

const Sponser = () => {
  return (
    <>  
        <div className={styles.sponserbody}>
        <div className='tracksection'>
            <div className={styles.titlesponsercontainer}>
                <h2 className={styles.titlesponsertext}>Title Sponser</h2>
                <a href="https://www.algorithma.tech/"><Image className={styles.titlesponserimg} src={Alg} alt="Algorithma" /></a>
                <p className='text-white font-normal mb-0 lg:mb-16 text-left mx-[10px] font-sans text-sm lg:text-xl'>At Algorithma, we firmly believe that technology has the power to reshape industries and drive positive change. We&#39;re at the forefront of this transformation, leveraging cutting-edge technological advancements to redefine the financial landscape. Our team of experts combines financial expertise with technological prowess to develop innovative solutions that break down barriers and enhance the investment experience for everyone</p>
            </div> 
            </div> 
            <div className="tracksection">
            <div className={styles.associatesponsercontainer}>
                <h2 className={styles.associatesponsertext}>Associate Sponsers</h2>
                <div className={styles.associatesponserimgcontainer}>
                <a href="https://www.voiceflow.com/"><Image className={styles.associatesponserimg1} src={Voice} alt="Voiceflow" /></a>
                <a href="https://gen.xyz/"><Image className={styles.associatesponserimg} src={Xyz} alt=".xyz" /></a>
                
                </div>

            </div>  
            </div>

        </div>
    </>
  )
}

export default Sponser
