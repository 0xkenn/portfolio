import React from 'react'

const SoftText = ({children}) => {
  return (
    <p className='dark:text-neutral-100 light:text-neutral-800 opacity-60 mt-8 text-[.6rem] md:text-[.8rem] lg:text-[1rem] text-center'>
        {children}
    </p>
  )
}

export default SoftText