import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import About from '@/components/About'
import CountdownTimer from '@/components/Countdown'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Hero/>
      <About/>
     
      <CountdownTimer targetDate={new Date('September 23, 2023 09:30:00').getTime()}/>
   
    </main>
  )
}
