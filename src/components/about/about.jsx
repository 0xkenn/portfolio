import React from 'react'
import SoftText from '../fonts/soft-text'
import BlurFade from '../magicui/blur-fade'
import LanguageList from '../languageList'


const About = () => {
  return (
    <section id="about">
      <div className="mx-auto max-w-screen-xl px-4 py-24 lg:pt-64">
        <div className="mx-auto mb-16 max-w-screen-lg text-center">
        <BlurFade delay={0.25} inView>
        <h1 className='lg:text-[1.5rem] font-extrabold'>ABOUT ME</h1>
        </BlurFade>

       <BlurFade delay={0.50} inView>
       <SoftText>
            Hey there! I&apos;m a person who loves anime, tennis, coding, and good food. When I&apos;m not writing code, you&apos;ll probably find me on the court, whipping up something delicious, or catching up on my favorite anime. I believe in balancing hard work with rest, so sleep is a priority too! Always learning, always creating
        </SoftText>
       </BlurFade>
        </div>
        <div className="flex flex-col px-4">
  {/* Programming Languages Section */}
  <div className="flex flex-row">
    <div className="w-1/4">
      <p>Programming Languages</p>
    </div>
    <div className="w-2/5 ml-10 grid grid-cols-5 gap-4">
      <LanguageList />
    </div>
  </div>

  {/* Database Section */}
  <div className="flex flex-row mt-6">
    <div className="w-1/4">
      <p>Databases</p>
    </div>
    <div className="w-2/5 ml-10 grid grid-cols-5 gap-4">
      {/* <DatabaseList /> */}
    </div>
  </div>
</div>



        {/* end */}
      </div>
    </section>
  )
}

export default About