import './fronted_styles.css'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion';

export default function Frontend(){
    return(
        <motion.div 
            className='specialty_block'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15
                    }
                }
            }}
        >
            <motion.div 
                className='hello-text'
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
                    }
                }}
            >
                "Hello world"
            </motion.div>
            
            <div className='specialty_content'>
                <motion.div 
                    className='specialty_title'
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { 
                            opacity: 1, 
                            y: 0,
                            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
                        }
                    }}
                >
                    <h1>FRONT <span>end</span> <br />DEVELOPER</h1>
                </motion.div>
                
                <div className='specialty_description'>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
                            }
                        }}
                    >
                        Это специалист, который занимается разработкой пользовательского интерфейса, которую видят посетители страницы
                    </motion.p>
                    
                    <motion.button 
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { 
                                opacity: 1, 
                                scale: 1,
                                transition: { 
                                    duration: 0.5, 
                                    ease: [0.34, 1.56, 0.64, 1] 
                                }
                            }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Записаться
                        <GoArrowUpRight size={18} className='arrow'/>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    )
}