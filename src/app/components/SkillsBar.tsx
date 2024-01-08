import Image from 'next/image'

const skills = [
  'typescript',
  'react',
  'next',
  'tailwind',
  'prisma',
  'java',
  'python',
  'aws',
]

const SkillsBar = () => {
  return (
    <div className='relative w-full h-20 inline-flex flex-nowrap overflow-hidden group mask-shadow-gradient-right'>
      <div
        className={`absolute w-full h-full flex items-center animate-infinite-scroll group-hover:[animation-play-state:paused]`}
      >
        {skills.map((skill, index) => {
          return (
            <Image
              key={index}
              src={`/images/${skill}-logo.png`}
              alt={skill}
              width={0}
              height={0}
              sizes='100vw'
              className='w-auto h-20 mx-auto'
            />
          )
        })}
      </div>
      <div
        className={`absolute w-full flex items-center left-[100%] animate-infinite-scroll group-hover:[animation-play-state:paused]`}
      >
        {skills.map((skill, index) => {
          return (
            <Image
              key={index}
              src={`/images/${skill}-logo.png`}
              alt={skill}
              width={0}
              height={0}
              sizes='100vw'
              className='w-auto h-20 mx-auto'
            />
          )
        })}
      </div>
    </div>
  )
}

export default SkillsBar
