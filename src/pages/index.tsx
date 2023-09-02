import Image from 'next/image'
 import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Contact from "../components/contact/contact"
import Openhack from "../components/openhack/openhack"
import Events from "../components/Events/event"
import Register from "../components/registration/registration"
import Tracks from "@/components/track/Tracks"
import Faq from "@/components/faq/faq"


import Navbar from '@/components/Navbar'
import bgmain from'../assets/bgmain.svg'

const inter = Inter({ subsets: ['latin'] })
 
const NoSSR = dynamic(() => import('../components/Countdown'), { ssr: false })
const Nav = dynamic(() => import('../components/Navbar'), { ssr: false })
export default function Home() {
 

  return (
    <main
      
    
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <div className="mainbg">
        <Nav/>
      <Hero/>
       <NoSSR targetDate={new Date('September 23, 2023 09:30:00').getTime()}/>
      <About/>
      <Tracks/>
      <Register/>
      <Faq/>
      
      
      {/* <Events/> */}
      {/* <Openhack/> */}
      <Contact/>
    </div>
     
     
   
    </main>
  )
}
