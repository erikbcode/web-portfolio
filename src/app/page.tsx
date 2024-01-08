import About from './components/About'
import Experience from './components/Experience'
import Intro from './components/Intro'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className='w-full h-full z-20 grid grid-cols-1 place-items-center'>
      <Intro />
      <About />
      <Skills />
      <Experience />
    </main>
  )
}
