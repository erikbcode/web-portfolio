import React from 'react'

type Job = {
  companyName: string
  location: string
  jobTitle: string
  dateRange: string
  bullets: string[]
}

const amazon: Job = {
  companyName: 'Amazon',
  location: 'Austin, TX',
  jobTitle: 'Software Dev Engineer Intern',
  dateRange: 'May 2022 - August 2022',
  bullets: [
    `Developed a business customer data management API using Java,
    Google Guice, Docker, and AWS (Redshift, S3, ECS/Fargate) to
    replace an existing process, resulting in an 85% reduction in the
    time required for manual data handling tasks by developers.`,
    `Designed a webpage for internal teams using React and TypeScript,
    enhancing UI with one-click attributes and intuitive interfaces to
    streamline recurring Account Management Services team processes;
    integrated with existing APIs and AWS S3 via API Gateway.`,
  ],
}

const vulcan: Job = {
  companyName: 'Vulcan Value Partners',
  location: 'Birmingham, AL',
  jobTitle: 'Data Science Intern',
  dateRange: 'March 2021 - November 2021',
  bullets: [
    `Developed and integrated over 15 new features into an ASP.NET Core
    web application used by internal research team of a ~$20 billion
    asset manager using C#, Razor Views, Entity Framework, and
    datasets asynchronously loaded from MS SQL Server. These
    enhancements streamlined the research team's workflow, achieving a
    75% time reduction for specific data retrieval analyses tasks.`,
    `Built a parsing script for financial report sections using Python,
    Pandas, CPU parallelization, and regex to clean data and send to
    MS SQL Server database; script was run on ~10,000 documents with
    over 80% accuracy.`,
    `Rebuilt portions of .NET web app using React, Node.js, Express.js,
    and SSMS to display data for research team as proof-of-concept for
    a full website conversion.`,
  ],
}

const jobs: Job[] = [amazon, vulcan]

const Experience = () => {
  return (
    <section className='relative w-3/4 min-h-[50vh] flex flex-col justify-center items-center text-center gap-12 my-12'>
      <h2 className='text-4xl font-semibold select-none cursor-default hover:scale-110 transition-all duration-500'>
        Experience
      </h2>
      <div className='w-full flex flex-col gap-4'>
        {jobs.map((job, index) => (
          <React.Fragment key={job.companyName}>
            <JobSection job={job} />
            {index !== jobs.length - 1 ? (
              <hr className='border-t border-white' />
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

const JobSection = ({ job }: { job: Job }) => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <div>
        <div className='flex flex-row justify-between font-semibold'>
          <h4 className='text-start'>{job.companyName}</h4>
          <h4 className='text-end'>{job.location}</h4>
        </div>
        <div className='flex flex-row justify-between font-light'>
          <h4 className='italic text-start'>{job.jobTitle}</h4>
          <h4 className='text-end'>{job.dateRange}</h4>
        </div>
      </div>
      <ul className='self-start list-disc list-inside text-start flex flex-col gap-2'>
        {job.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

export default Experience
