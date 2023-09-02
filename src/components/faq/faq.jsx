import React from 'react'
import styles from "./faq.module.css"
import Faqcard from '../faqcard/faqcard'

const faq = () => {
  return (
    <div className={styles.faqbody}>
        <h2 className={styles.faqtitle}>FAQ</h2>
        <div className={styles.faqcontainer}>
        <Faqcard />
        <Faqcard />
        <Faqcard />
        </div>
    </div>
  )
}

export default faq
