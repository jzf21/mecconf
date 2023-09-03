import React from 'react'
import styles from './faqcard.module.css'
import { useState } from 'react'

function Faqcard(props) {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
  <div className="w-full">
     {/* <input
       id="expandCollapse"
       checked={open}
       type="checkbox"
       className="peer sr-only"
     /> */}
     <label
    
       className=
         "w-full flex justify-center items-center bg-blue-100 hover:bg-blue-500 "
       
       onClick={toggleOpen}
     >
       {open ? "Less information" : "More information"}
       {/* <CaretIcon
         height={20}
         width={20}
         className={classNames("ml-4", {
           "rotate-180": open,
         })}
       /> */}
     </label>
     <div
       className={open?"overflow-hidden h-0 bg-slate-300  duration-200 ease-in-out ":" bg-slate-300 h-[200px] overflow-hidden  duration-200 ease-in-out "}
       
     >
       <p className="text-black">
         {props.answer}
       </p>
     </div>
   </div>


    // <div className={styles.faqcardbody}>
    //   <div className={styles.faqcardcontent}>
    //   <p className={styles.faqcardquestion}>{props.question}</p>

    //   {open && <p className={styles.faqcardanswer}>{props.answer}</p>}

    // </div>
    // <div className={styles.faqcardopen} onClick={toggleOpen}>

    // </div>
    // </div>
  );
}

export default Faqcard
