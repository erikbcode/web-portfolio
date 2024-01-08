const About = () => {
  return (
    <section
      id='about'
      className='relative w-3/4 min-h-[50vh] flex flex-col justify-center items-center text-center gap-12 my-12'
    >
      <h2 className='text-4xl font-semibold select-none cursor-default hover:scale-110 transition-all duration-500'>
        About Me
      </h2>
      <p className='text-sm md:text-lg font-light select-none cursor-default'>
        Full-stack engineer with a sharp focus on building efficient and
        impactful solutions. Passionate about crafting seamless user
        experiences, while implementing robust backend functionality.
      </p>
      <p className='text-sm md:text-lg font-light select-none cursor-default'>
        My experience working as a developer on a wide range of teams, from
        fintech & asset management all the way to services supporting B2B
        purchasing, gives me a unique perspective and skillset when approaching
        any problem.
      </p>
      <p className='text-sm md:text-lg font-light select-none cursor-default'>
        Beyond the code, I'm eager to collaborate and learn from experienced
        developers. I'm a passionate believer in continuous growth, constantly
        seeking new ways to expand my knowledge and skillset.
      </p>
    </section>
  )
}

export default About
