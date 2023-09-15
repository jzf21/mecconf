import React from 'react'
import styles from "./faq.module.css"
import Faqcard from '../faqcard/faqcard';

const Faq = () => {
  return (
    <div className={styles.faqbody}>
        <h2 className="text-center text-[1.5rem] text-white md:text-[2rem] lg:text-[2.5rem]">FAQ</h2>
        <div className={styles.faqcontainer}>
          
        <Faqcard 
          question="What is the difference between a 3D model and a 3D scan?"
          answer="A 3D model is a digital representation of an object. A 3D scan is a digital representation of a physical object. 3D models are created using 3D modeling software, while 3D scans are created using 3D scanning hardware."
        />
        <Faqcard
          question="What is the difference between a 3D model and a 3D scan?"
          answer="A 3D model is a digital representation of an object. A 3D scan is a digital representation of a physical object. 3D models are created using 3D modeling software, while 3D scans are created using 3D scanning hardware."
        />
        <Faqcard
          question="What is the difference between a 3D model and a 3D scan?"
          answer="A 3D model is a digital representation of an object. A 3D scan is a digital representation of a physical object. 3D models are created using 3D modeling software, while 3D scans are created using 3D scanning hardware."
        />
        </div>
    </div>
  )
}

export default Faq
