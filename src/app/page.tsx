import Image from 'next/image'
import Intro from './components/Intro'
import About from './components/About'

export default function Home() {
  return (
    <main className='w-full h-full z-20 grid grid-cols-1 place-items-center'>
      <Intro />
      <About />
    </main>
  )
}
