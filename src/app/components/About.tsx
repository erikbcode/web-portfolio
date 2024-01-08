import React from 'react'

const About = () => {
  return (
    <section className='relative w-3/4 min-h-[50vh] flex flex-col items-center text-center mt-10 gap-8'>
      <h2 className='text-4xl font-semibold'>About Me</h2>
      <p className='text-sm md:text-lg font-light'>
        Full-stack engineer with a sharp focus on building efficient and
        impactful solutions. Passionate about crafting seamless user
        experiences, while implementing robust backend functionality. Experience
        in TypeScript, React, Next.js, Java, Python, and more.
      </p>
      <p className='text-sm md:text-lg font-light'>
        My experience working as a developer on a wide range of teams, from
        fintech & asset management all the way to services supporting B2B
        purchasing, gives me a unique perspective and skillset when approaching
        any problem.
      </p>
      <p className='text-sm md:text-lg font-light'>
        Beyond the code, I'm eager to collaborate and learn from experienced
        developers. I'm a passionate believer in continuous growth, constantly
        seeking new ways to expand my knowledge and skillset.
      </p>
    </section>
  )
}

export default About
