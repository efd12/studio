import './footer_styles.css'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion';

export default function Footer(){
    // Анимация для контейнера
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    // Анимация для заголовка
    const titleVariants: any = {
        hidden: { 
            opacity: 0, 
            y: 40 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Анимация для списка
    const listItemVariants: any = {
        hidden: { 
            opacity: 0, 
            x: -30 
        },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return(
        <motion.div 
            className='footer'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className='footer-content'>
                <motion.h1 
                    variants={titleVariants}
                >
                    SOCIAL <br /> MEDIA
                </motion.h1>
                
                <motion.ul
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    <motion.li 
                        variants={listItemVariants}
                        whileHover={{ 
                            x: 10,
                            transition: { duration: 0.2 }
                        }}
                    >
                        .instagram 
                        <GoArrowUpRight size={18} className='arrow'/>
                    </motion.li>
                    
                    <motion.li 
                        variants={listItemVariants}
                        whileHover={{ 
                            x: 10,
                            transition: { duration: 0.2 }
                        }}
                    >
                        .facebook 
                        <GoArrowUpRight size={18} className='arrow'/>
                    </motion.li>
                    
                    <motion.li 
                        variants={listItemVariants}
                        whileHover={{ 
                            x: 10,
                            transition: { duration: 0.2 }
                        }}
                    >
                        .youtube 
                        <GoArrowUpRight size={18} className='arrow'/>
                    </motion.li>
                </motion.ul>
            </div>
        </motion.div>
    )
}