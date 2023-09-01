import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
        <section className=" ">
      <div className="py-8 px-4 mx-auto  max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col justify-evenly">
        <h2 className='text-white uppercase font-semibold text-[2rem] md:text-[2.3rem]'>About <span className='text-blue-500'>MEC.CONF</span></h2>
        <p className='text-white font-normal font-sans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vitae, esse voluptatem perferendis explicabo in enim laborum repudiandae numquam excepturi et iusto accusamus vel dignissimos magnam quas, architecto quos rem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid molestias et quibusdam dignissimos voluptatem unde, odio neque cum. Accusamus ratione corporis, similique quam distinctio ullam rerum! Sapiente, fugiat! Distinctio, libero?</p>
      
      </div>
    </section>
  )
}

export default About