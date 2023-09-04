import React from 'react'
import fosspng from '../assets/fosspng.svg'
import Image from 'next/image'
import ieeecs from '../assets/ieeecs.svg'
import ieeemec from '../assets/ieeemec.svg'

type Props = {}

const About = (props: Props) => {
  return (
        <div>
      
      
      
      <div className="bg-[url('/ieeemecbg.svg')] bg-cover min-h-screen" >
      <div className="py-8 px-4 mx-auto  max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col justify-evenly items-center gap-16">
        <h2 className='text-white uppercase font-bold tracking-wider text-[2rem] md:text-[2.5rem]'>About <span className='text-[#4A4AFF]'>IEEE MEC SB</span></h2>
        <p className='py-8 text-white font-normal mb-32 font-sans'>FOSSMEC, the Free and Open Source Cell at Model Engineering College Kochi, is a dynamic student-led organization dedicated to advocating the widespread adoption of free and open-source software (FOSS). Through engaging workshops and training programs, we empower individuals with cutting-edge expertise, enabling them to embrace FOSS, remain informed of advancements, and explore promising career prospects. Join our vibrant community and unlock the endless possibilities of FOSS today</p>
        <Image src={ieeemec} alt="" />
      </div>
      </div>
      <div className="bg-[url('/fossbg.svg')] bg-cover min-h-screen">
      <div className="py-8 px-4 mx-auto  max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col justify-evenly items-center gap-16">
        <h2 className='text-white uppercase font-bold tracking-wider text-[2rem] md:text-[2.5rem]'>About <span className='fossmec'>FOSS MEC</span></h2>
        <p className='text-white font-normal mb-32 font-sans'>FOSSMEC, the Free and Open Source Cell at Model Engineering College Kochi, is a dynamic student-led organization dedicated to advocating the widespread adoption of free and open-source software (FOSS). Through engaging workshops and training programs, we empower individuals with cutting-edge expertise, enabling them to embrace FOSS, remain informed of advancements, and explore promising career prospects. Join our vibrant community and unlock the endless possibilities of FOSS today</p>
        <Image src={fosspng} alt="" />
      
      </div>
      </div>
      <div className="bg-[url('/ieecsbg.svg')] bg-cover min-h-screen">
      <div className="py-8 px-4 mx-auto  max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col justify-evenly items-center gap-16">
        <h2 className='text-white uppercase font-bold tracking-wider text-[2rem] md:text-[2.5rem]'>About <span className='text-[#4A4AFF]'>IEEE CS</span></h2>
        <p className='text-white font-normal mb-32 font-sans'>The IEEE Computer Society is where computer experts, scientists, academics, and industry pros unite to drive global tech forward. With conferences, publications, and awesome programs, we fuel dialogue, learning, and collaboration at every career stage. Our goal? To shape the industry's future and empower not just our members, but the world at large. From expert-led courses to unique webinars, we've got the technical know-how you need.</p>
        <Image className=""src={ieeecs} alt="" />
      </div>
      </div>
    </div>
  )
}

export default About