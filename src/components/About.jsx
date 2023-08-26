import React from 'react'
import  {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      {/*fadeIn(direction,type,delay,duration)*/}
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}

          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >

          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )

}
const About = () => {
  return (
    <>
    {/*for animation ,we put these in motion.div*/}
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    {/*fadeIn(direction,type,delay,duration)*/}
    <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    Hello there! I'm thrilled to welcome you to my corner of the internet. I'm a passionate software engineering student with an insatiable curiosity for crafting digital experiences. My journey in the world of code has led me to become well-versed in an array of languages – from the elegance of Python, the efficiency of C++, to the dynamic trio of HTML, CSS, and JavaScript that breathe life into the web. But it doesn't stop there – I've also dipped my toes into the exciting realm of React, adding a touch of interactivity to my creations.<br/>
    Beyond just writing lines of code, I'm a storyteller at heart. Each project I undertake is more than a collection of functions; it's a narrative woven with innovation, problem-solving, and a dash of my unique style. From conceptualization to deployment, I pour my dedication into every step, ensuring the end result not only functions flawlessly but also leaves users with an unforgettable digital experience.<br/>
    So, whether you're here to explore my projects, collaborate on an exciting venture, or simply geek out about the latest trends in tech, I'm excited to connect with you. Thanks for stepping into my digital realm – feel free to roam around and discover the code-driven stories I have to share!<br/>
    Stay curious,<br/>
    Maria
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(About,"about")