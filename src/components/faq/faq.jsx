"use client"
import React from 'react'
import styles from "./faq.module.css"
import Faqcard from '../faqcard/faqcard';

const Faq = () => {
  return (
    <div className={styles.faqbody}>
        <h2 className="text-center text-[1.5rem] text-white md:text-[2rem] lg:text-[2.5rem]">FAQ</h2>
        <div className={styles.faqcontainer}>
          
        <Faqcard 
          question="Who Can Attend?"
          answer="The event is open to both college students and working professionals."
        />
        <Faqcard
          question="How Much Does It Cost To Participate?"
          answer="This event is completely free! We’ll also provide you with a plethora of resources and tools to hack with as well."
        />
        <Faqcard
          question="Can I Participate Without A Computer Science Background?"
          answer="Certainly! A computer science background is not a requirement for participation. Your creativity and innovation are not limited by technical skills, and you can always learn the necessary tools and technologies. The goal is to keep learning!"
        />
        </div>
    </div>
  )
}

export default Faq
