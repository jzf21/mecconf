import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/MEC HACK LOGO WHITE T 1.svg'
import iee from '../assets/IEEE MEC SB LOGO WHITE T 1.svg'
import computersociety from '../assets/CSLogo-200x70 1.svg'
import heading from "../assets/heading.svg"
import foss from "../assets/fosspng.svg"
import location from "../assets/location.svg"
import date from "../assets/ic_round-date-range.svg"
type Props = {}

const Hero = (props: Props) => {
  return (
    <section className=" ">
      <div className="py-16 px-4 mx-auto sm:h-[100vh] max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col items-center sm:justify-center gap-8 md:justify-evenly">
          <div className='flex flex-row justify-center items-center gap-12 max-h- mt-4  '>
        <Image src={computersociety} alt="logo" className="h-16 w-16 sm:h-24 sm:w-24 md:h-36 md:w-36 mt-4" />
       <Image src={iee} alt="logo" className="h-16 w-16 sm:h-24 sm:w-24 md:h-36 md:w-36 mt-4 " />
       <Image src={foss} alt="logo" className="h-16 w-16 sm:h-24 sm:w-24 md:h-36 md:w-36 mt-4 " />
       </div>
   
       <div className='flex flex-col justify-center  max-h-   '>
        {/* <Image src={logo} alt="logo" className="h-full mt-2" /> */}
         {/* <h1 className="text-shadows  herotext dark:text-white mx-auto">
          MEC.HACK
        </h1> */}
        <Image src={heading} alt="logo" className="h-full " />
        <h2 className='text-white italic  text-[0.8rem] lg:text-[1.7rem] md:text-[1.4rem] -mt-12 md:-mt-20'>Bridging Gaps Through Technology</h2>
       </div>
       
      
        <div className="px-4 mx-auto flex flex-col items-center gap-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36 uppercase">
          <div className='flex flex-row gap-4 justify-center items-center'>
            <Image src={date} alt="logo" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 " />
            <p className='text-white text-xs sm:text-lg' >September 23,24</p>
          </div>
            <div className='hidden min-[420px]:flex flex-row gap-4  justify-center items-center'>
            <Image src={location} alt="logo" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 " />
            <p className='text-white text-xs  sm:text-lg'>  Govt. Model Engineering College,Thrikkakara</p>
          </div>

            <div className='flex min-[4204px]:hidden flex-row gap-4  justify-center items-center'>
              <Image src={location} alt="logo" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 " />
              <p className='text-white text-xs  sm:text-lg'>  Govt. Model Engineering<br/> College,Thrikkakara</p>
            </div>
        
         
          
        </div>
        <button className='bg-[#4A4AFF] text-white tracking-wide text-xl uppercase  px-8 py-2 rounded-[99px] mt-4 hover:bg-[#3B3BFF]'>Register</button>
      </div>
    </section>
  );
}

export default Hero