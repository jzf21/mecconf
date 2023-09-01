import React from 'react'
import Image from 'next/image'
import logo from '../../public/assets/MEC HACK LOGO WHITE T 1.svg'
import iee from '../assets/IEEE MEC SB LOGO WHITE T 1.svg'
import computersociety from '../assets/CSLogo-200x70 1.svg'
type Props = {}

const Hero = (props: Props) => {
  return (
    <section className=" ">
      <div className="py-8 px-4 mx-auto h-[100vh] max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col justify-evenly">
          <div className='flex flex-row justify-between gap-2 max-h-   '>
        <Image src={computersociety} alt="logo" className="h-full mt-2" />
       <Image src={iee} alt="logo" className="h-full mt-2" />
       </div>
   
       <div className='flex flex-row justify-center gap-2 max-h-   '>
        {/* <Image src={logo} alt="logo" className="h-full mt-2" /> */}
         <h1 className=" text-[4rem] md:text-[6rem] herotext dark:text-white my-auto">
          MEC HACK
        </h1>
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