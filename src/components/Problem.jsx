import React from 'react'
import Image from 'next/image'
import Fin from '../assets/finedited1.png'

const Problem = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center" >
        
      {/* <Image src={Fin} alt="Fintech" className="h-16 w-16 sm:h-24 sm:w-24 md:w-[54rem] md:h-[12rem] mt-4 " /> */}
      <div className="pt-0 px-4 mx-auto  max-w-screen-xl text-left lg:pt-16 lg:px-12 flex flex-col justify-evenly items-center gap-8">
        <h2 className='text-white uppercase text-left font-bold tracking-wider text-[1.5rem] md:text-[2rem] lg:text-[2.5rem]'>Problem Statements</h2>
        <p className='py-8 text-white font-normal mb-8 font-sans text-sm lg:text-xl'>

        1. Develop different ways by which we can help regular people simplify financial tasks and processes, making it easier for everyday individuals to manage their money effectively<br/><br/>

2. Create a tool that utilizes technology and leverages data analysis to provide intelligent guidance on the optimal times to buy or sell financial assets, such as stocks and cryptocurrencies.<br/><br/>

3. Create a solution for the financial world using Generative AI. This solution should help improve financial services and address important challenges in fintech, making things smoother and more efficient for both businesses and customers.
        </p>

        
      </div>
      </div>
      <div className=""></div>
    </div>
  )
}

export default Problem
