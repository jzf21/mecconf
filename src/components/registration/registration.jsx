"use client"
import React from 'react'
import styles from './registration.module.css'
import ticket from '../../assets/noto-v1_ticket.svg'
import Image from 'next/image'

const registration = () => {
  return (
    <div className={styles.regbody}>
        {/* <h2 className={styles.regtitle}>REGISTRATION</h2>
        <Image className={styles.regimg} src={ticket} alt="registration"/>
        <p className={styles.regtext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa ut minus laborum eveniet id numquam laudantium, tempore obcaecati, reprehenderit, optio placeat dolores veritatis aliquam consectetur architecto quia odio doloremque sed! Ipsam cumque omnis, tempore voluptatum cupiditate porro beatae, quo officiis facere asperiores nisi hic quibusdam laudantium! Necessitatibus, autem tempore.</p> */}
        <a target='_blank' href="https://docs.google.com/forms/d/1zi6ZRCTMxTySuQ-l9Zkolu9wXVFU13YWxpk74cNRmyE/edit?ts=6503f2c4"><button className={styles.regbtn}>REGISTER HERE</button></a>
      
    </div>
  )
}

export default registration
