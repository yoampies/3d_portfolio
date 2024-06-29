import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-36 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'> Andrés</span></h1>
          <p className={`${styles.heroSubtext} mt-2 text-white-100`}>Proficient Web Developer experienced in creating role-based 
            platforms and database management. Leveraging UI/UX design principles and a diverse tech stack, including Laravel and 
            React JS, to successfully optimize development strategies.</p>
        </div>
      </div>
      
      <ComputersCanvas />
    </section>
  )
}

export default Hero