import { siteConfig } from '@/config/site'
import React from 'react'
import BlurFade from '../magicui/blur-fade'
import SoftText from '../fonts/soft-text'

const Hero = () => {
  return (
    <section className="relative overflow-hidden w-[70%] lg:mb-10" id="home">
    <div className="mx-auto max-w-screen-xl px-4 pt-20 pb-8 lg:px-12 lg:pt-40 lg:pb-24">
      <div className="flex flex-col items-center pt-60">

        <BlurFade duration={0.25}> 
          <p className='font-extrabold lg:text-[.8rem] md:text-[.7rem] text-[.5rem]'>HI, MY NAME IS</p>
        </BlurFade>

        <BlurFade duration={0.50}>
        <h1 className="lg:text-[3rem] md:text-[2rem] text-[1rem] font-bold dark:text-neutral-100 light:text-neutral-50 font-mono">
          {siteConfig.author}
        </h1>
        </BlurFade>
        
        

      <BlurFade duration={0.75}>
      <p className="lg:text-[1rem] md:text-[.8rem] text-[.5rem] dark:text-neutral-100 light:text-neutral-900 font-mono  ">
         Software Developer | Data Engineer
      </p>
      </BlurFade>
        

      <BlurFade duration={1.00}>
        <SoftText>
          Passionate in tech specifically in backend development and interest in web development,
          mobile development and data engineering
          </SoftText>
      </BlurFade>
      </div>
      </div>
  </section>
  )
}

export default Hero