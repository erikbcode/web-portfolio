'use client'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Intro = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.getElementById('about')?.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <div className='relative min-h-screen flex flex-col justify-center items-center gap-8 text-center mx-4'>
      <Link href='/'>
        <h1 className='text-4xl sm:text-7xl lg:text-9xl font-semibold hover:scale-110 text-white bg-gradient-to-tr from-blue-500 to-pink-500 hover:text-transparent transition-all duration-300 bg-clip-text'>
          Erik Buinevicius
        </h1>
      </Link>

      <h3 className='text-sm sm:text-lg select-none cursor-default'>
        Full stack software engineer.
      </h3>
      <div className='flex flex-row gap-8'>
        <Link
          href='https://github.com/erikbcode'
          target='_blank'
          className='flex items-center justify-center'
        >
          <Image
            src='/images/github-logo.png'
            alt='none'
            width='0'
            height='0'
            sizes='100vw'
            className='w-16 md:w-20 hover:scale-110 rounded-full transition-all duration-500'
          />
        </Link>
        <Link
          href='https://www.linkedin.com/in/erikbuinevicius'
          target='_blank'
          className='flex items-center justify-center'
        >
          <Image
            src='/images/linkedin-logo.png'
            alt='none'
            width='0'
            height='0'
            sizes='100vw'
            className='w-16 md:w-20 hover:scale-110 rounded-full transition-all duration-500'
          />
        </Link>
      </div>
      <button onClick={handleScrollDown}>
        <ChevronDown className='w-10 h-10 hover:text-pink-400 hover:scale-150 transition-all duration-500 md:w-20 md:h-20' />
      </button>
    </div>
  )
}

export default Intro
