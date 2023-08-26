import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';


const SectionWrapper = (Component,idName) => 
    function HOC(){
        {/*staggerContainer will animate our section*/}
        return(
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{once:true,amount:0.25}}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >

                {/*for the scrolling down
                basically scrolling down to this invisible span section*/}
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Component/>
            </motion.section>
        )

}

export default SectionWrapper