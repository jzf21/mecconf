import React from "react";
import styles from "./Contactcard.module.css";
import Image from "next/image";
import phone from "../../assets/phone.svg";
import email from '../../assets/ic_round-mail.svg'
import linkedin from '../../assets/bi_linkedin.svg'
import Link from "next/link";

function Contactcard(props) {
  var id=props.id;
  return (
    <>
      <div className={styles.contactcardbody}>
       {  (id!=3) &&<Image
          src={props.img}
          alt="Contact us"
          className={styles.contactcardimg}
            
        />
       }
       {  (id==3) &&<Image
          src={props.img}
          alt="Contact us"
          className={styles.contactcardimg3}
            
        />
       }
        <div className={styles.contactcardcontent}>
          <p className={styles.contactcardname}>{props.name}</p>
          <p className={styles.contactcarddesignation}>{props.designation}</p>
          <div className={styles.contactcardicons}>
            <a href={"tel:" + props.mobile}>
              <Image src={phone} alt="phone" className={styles.smallicons} />
            </a>
            <a href={"mailto:"+ props.email}>
              <Image src={email} alt="email" className={styles.bigicons} />
            </a>
            <a href={props.link}>
              <Image src={linkedin} alt="linkedin" className={styles.smallicons}/>
            </a>
          </div>
        </div>
        {/*         
        <h3 className={styles.contactname}>{props.name}</h3>
        <h3 className={styles.contactemail}>{props.email}</h3>
        <h3 className={styles.contactmobile}>{props.mobile}</h3> */}
      </div>
    </>
  );
}

export default Contactcard;
