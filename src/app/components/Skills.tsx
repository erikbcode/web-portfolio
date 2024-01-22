import SkillsBar from './SkillsBar'

const Skills = () => {
  return (
    <section className='relative w-3/4 min-h-[50vh] flex flex-col justify-center items-center text-center gap-12 my-12'>
      <h2 className='relative top-4 text-4xl font-semibold select-none cursor-default hover:scale-110 transition-all duration-500'>
        Skills
      </h2>
      <SkillsBar />
      <p className='text-sm md:text-lg font-lightlight select-none cursor-default'>
        I possess a versatile skill set, showcasing proficiency in technologies
        such as Typescript, React, and Next.js for robust front-end development,
        complemented by expertise in Java and Python for powerful back-end
        solutions. My experience extends to cloud computing, particularly with
        AWS services, demonstrating a comprehensive understanding of scalable
        and reliable cloud solutions.
      </p>
      <p className='text-sm md:text-lg font-lightlight select-none cursor-default'>
        Beyond my current skill set, I pride myself on being an adaptable
        learner, quick to grasp new tools and technologies. This agility allows
        me to stay at the forefront of advancements, ensuring a dynamic and
        innovative approach to problem-solving.
      </p>
    </section>
  )
}

export default Skills
