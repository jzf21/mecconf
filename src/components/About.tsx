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
        <p className='py-8 text-white font-normal mb-32 font-sans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vitae, esse voluptatem perferendis explicabo in enim laborum repudiandae numquam excepturi et iusto accusamus vel dignissimos magnam quas, architecto quos rem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid molestias et quibusdam dignissimos voluptatem unde, odio neque cum. Accusamus ratione corporis, similique quam distinctio ullam rerum! Sapiente, fugiat! Distinctio, libero?</p>
        <Image src={ieeemec} alt="" />
      </div>
      </div>
      <div className="bg-[url('/fossbg.svg')] bg-cover min-h-screen">
      <div className="py-8 px-4 mx-auto  max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col justify-evenly items-center gap-16">
        <h2 className='text-white uppercase font-bold tracking-wider text-[2rem] md:text-[2.5rem]'>About <span className='fossmec'>FOSS MEC</span></h2>
        <p className='text-white font-normal mb-32 font-sans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vitae, esse voluptatem perferendis explicabo in enim laborum repudiandae numquam excepturi et iusto accusamus vel dignissimos magnam quas, architecto quos rem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid molestias et quibusdam dignissimos voluptatem unde, odio neque cum. Accusamus ratione corporis, similique quam distinctio ullam rerum! Sapiente, fugiat! Distinctio, libero?</p>
        <Image src={fosspng} alt="" />
      
      </div>
      </div>
      <div className="bg-[url('/ieecsbg.svg')] bg-cover min-h-screen">
      <div className="py-8 px-4 mx-auto  max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col justify-evenly items-center gap-16">
        <h2 className='text-white uppercase font-bold tracking-wider text-[2rem] md:text-[2.5rem]'>About <span className='text-[#4A4AFF]'>IEEE CS</span></h2>
        <p className='text-white font-normal mb-32 font-sans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vitae, esse voluptatem perferendis explicabo in enim laborum repudiandae numquam excepturi et iusto accusamus vel dignissimos magnam quas, architecto quos rem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid molestias et quibusdam dignissimos voluptatem unde, odio neque cum. Accusamus ratione corporis, similique quam distinctio ullam rerum! Sapiente, fugiat! Distinctio, libero?</p>
        <Image className=""src={ieeecs} alt="" />
      </div>
      </div>
    </div>
  )
}

export default About