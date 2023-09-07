import React from "react";
import styles from "./Contactcard.module.css";
import Image from "next/image";
import phone from "../../assets/phone.svg";
import email from '../../assets/ic_round-mail.svg'
import linkedin from '../../assets/bi_linkedin.svg'
import Link from "next/link";

function Contactcard(props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-[300px] rounded-xl p-4 bg-[#cdcef4]">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Contact us self-center mx-auto"
          className="w-[90%] rounded-lg"
          // width={300}
          // height={300}
        />

        <div className="flex flex-col justify-center items-center text-center gap-1">
          <p className="text-blue-500 text-lg">{props.name}</p>
          <p className="text-black text-sm">{props.designation}</p>
          <div className="flex flex-row justify-between items-center gap-8 mt-2">
            <a href={"tel:" + props.mobile}>
              <Image src={phone} alt="phone" className="w-6 h-6" />
            </a>
            <a href={"mailto:"+ props.email}>
              <Image src={email} alt="email" className="w-8 h-8" />
            </a>
            <a href={props.link}>
              <Image src={linkedin} alt="linkedin" className="w-6 h-6" />
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
