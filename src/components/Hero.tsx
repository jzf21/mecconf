import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/MEC HACK LOGO WHITE T 1.svg'
import iee from '../assets/IEEE MEC SB LOGO WHITE T 1.svg'
import computersociety from '../assets/CSLogo-200x70 1.svg'
import heading from "../assets/heading.svg"
import foss from "../assets/fosspng.svg"
type Props = {}

const Hero = (props: Props) => {
  return (
    <section className=" ">
      <div className="py-8 px-4 mx-auto h-[100vh] max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center justify-center gap-16 md:justify-evenly">
          <div className='flex flex-row justify-center items-center gap-16 max-h- mt-4  '>
        <Image src={computersociety} alt="logo" className="h-24 w-24 md:h-36 md:w-36 -mb-2" />
       <Image src={iee} alt="logo" className="h-24 w-24 md:h-36 md:w-36 mt-4" />
       <Image src={foss} alt="logo" className="h-24 w-24 md:h-36 md:w-36 mt-4" />
       </div>
   
       <div className='flex flex-col justify-center  max-h-   '>
        {/* <Image src={logo} alt="logo" className="h-full mt-2" /> */}
         {/* <h1 className="text-shadows  herotext dark:text-white mx-auto">
          MEC.HACK
        </h1> */}
        <Image src={heading} alt="logo" className="h-full " />
        <h2 className='text-white italic  text-[1.4rem] lg:text-[1.7rem] md:text-[2rem] -mt-12'>Bridging Gaps Through Technology</h2>
       </div>
       
      
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 uppercase">
          september 23rd and 24th<br/>
          Govt. Model Engineering College, Thrikkakara
         
          
        </div>
      </div>
    </section>
  );
}

export default Hero