import React from 'react'
import FloatingWordsCanvas from './Three/FloatingWords'
import Image from 'next/image'

const Education = () => {
  return (
    <div className='relative w-3/4 min-h-[50vh] flex flex-col justify-center items-center text-center gap-12 my-12'>
      <h2 className='relative top-4 text-4xl font-semibold select-none cursor-default hover:scale-110 transition-all duration-500 w-full'>
        Education
      </h2>
      <p className='text-sm md:text-lg font-light select-none cursor-default'>
        I am a graduate of the University of Alabama with a Bachelor of Science
        degree in Computer Science from the College of Engineering, a minor in
        Economics from the Culverhouse College of Business, and an Honors
        College designation. I graduated with Summa Cum Laude honors and a 4.0
        GPA, earning my way onto the President's list during all eight
        semesters. I was awarded a full-ride National Merit Academic Scholarship
        to attend Alabama.
      </p>
      <p className='text-sm md:text-lg font-light select-none cursor-default'>
        During my time at The Capstone, I served as the Vice President of
        Operations for the Culverhouse Investment Management Group, overseeing a
        long-only, student-managed, value-oriented equity portfolio valued at
        approximately $1.8 million. I guided day-to-day operations and enhanced
        the operational efficiency of the group, while helping to organize major
        events such as the annual Capstone Student Investment Conference in
        Tuscaloosa, AL.
      </p>
      <div className='flex-1 w-full flex flex-row'>
        <div className='w-1/3 flex items-center justify-center'>
          <Image
            src={`/images/alabama-logo.png`}
            alt={'alabama'}
            width={0}
            height={0}
            sizes='100vh'
            className='w-72 h-72'
          />
        </div>
        <div className='w-2/3 flex'>
          <FloatingWordsCanvas />
        </div>
      </div>
    </div>
  )
}

export default Education
