import React from 'react'
import fosspng from '../assets/fosspng.svg'
import Image from 'next/image'
import ieeecs from '../assets/ieeecs.png'
import ieeemec from '../assets/ieeemec.png'

type Props = {}

const About = (props: Props) => {
  return (
        <div className='mb-12'>
      
      
      
      <div className="" >
      <div className="py-8 px-4 mx-auto  max-w-screen-xl text-left lg:py-16 lg:px-12 flex flex-col justify-evenly items-center gap-8">
        <h2 className='text-white uppercase text-left font-bold tracking-wider text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]'>About <span className='text-[#4A4AFF]'>IEEE MEC SB</span></h2>
        <p className='py-8 text-white font-normal mb-8 font-sans text-sm lg:text-xl'>
For over a quarter of a century, IEEE MEC SB, the student branch of IEEE at Model Engineering College, Thrikkakara, has been unwavering in its mission to empower and inspire tech enthusiasts. With a rich legacy of nurturing talent and fostering innovation, this dynamic community has consistently served as a catalyst for the future of technology. Its enduring commitment to cultivating skills, igniting passions, and shaping the tech leaders of tomorrow has solidified its position as a driving force in the ever-evolving landscape of innovation and education.</p>
        <Image priority={true} className="w-[220px] md:w-[280px] lg:w-[350px]"src={ieeemec}  alt="" />
      </div>
      </div>
      <div className="">
      <div className="py-8 px-4 mx-auto  max-w-screen-xl text-left lg:py-16 lg:px-12 flex flex-col justify-evenly items-center gap-8">
        <h2 className='text-white uppercase font-bold tracking-wider text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]'>About <span className='fossmec'>FOSS MEC</span></h2>
        <p className='text-white font-normal mb-8 font-sans text-sm lg:text-xl'>FOSSMEC, the Free and Open Source Cell at Model Engineering College Kochi, is a dynamic student-led organization dedicated to advocating the widespread adoption of free and open-source software (FOSS). Through engaging workshops and training programs, we empower individuals with cutting-edge expertise, enabling them to embrace FOSS, remain informed of advancements, and explore promising career prospects. Join our vibrant community and unlock the endless possibilities of FOSS today</p>
        <Image priority={true} className="w-[200px] md:w-[250px] lg:w-[300px]"src={fosspng} alt="" />
      
      </div>
      </div>
      <div className="">
      <div className="py-8 px-4 mx-auto  max-w-screen-xl text-left lg:py-16 lg:px-12 flex flex-col justify-evenly items-center gap-8">
        <h2 className='text-white uppercase font-bold tracking-wider text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]'>About <span className='text-[#4A4AFF]'>IEEE CS</span></h2>
        <p className='text-white font-normal mb-16 font-sans text-sm lg:text-xl'>The IEEE Computer Society is where computer experts, scientists, academics, and industry pros unite to drive global tech forward. With conferences, publications, and awesome programs, we fuel dialogue, learning, and collaboration at every career stage. Our goal? To shape the industry&#39;s future and empower not just our members, but the world at large. From expert-led courses to unique webinars, we&#39;ve got the technical know-how you need.</p>
        <Image priority={true} className="w-[250px] md:w-[300px] lg:w-[400px]"src={ieeecs} alt="" />
      </div>
      </div>
    </div>
  )
}

export default About