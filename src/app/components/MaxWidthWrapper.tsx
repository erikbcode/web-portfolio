import React from 'react'

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className='mx-auto w-full max-w-screen-2xl'>{children}</div>
}

export default MaxWidthWrapper
