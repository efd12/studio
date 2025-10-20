import './aboutUs_styles.css'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion';

export default function AboutUs(){
    // Варианты анимации для контейнера
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

    // Анимация для текста
    const textVariants: any = {
        hidden: { 
            opacity: 0, 
            y: 40,
            filter: "blur(8px)"
        },
        visible: { 
            opacity: 1, 
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    // Анимация для кнопок
    const buttonVariants: any = {
        hidden: { 
            opacity: 0, 
            x: -30,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1]
            }
        }
    };

    // Анимация для правого блока с кнопками
    const buttonsContainerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return(
        <motion.div 
            className="about-us-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="about-us-content">
                <motion.div 
                    className="our-studio"
                    variants={textVariants}
                >
                    <motion.p 
                        className="text-about-studio"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                    duration: 0.9,
                                    ease: [0.43, 0.13, 0.23, 0.96]
                                }
                            }
                        }}
                    >
                        Мы — команда практикующих разработчиков, которая 
                        превращает новичков в востребованных специалистов. 
                        Наша философия: минимум теории, максимум реальных 
                        проектов. Студенты начинают работать с коммерческими 
                        задачами уже на второй неделе обучения.
                    </motion.p>
                    
                    <motion.button
                        variants={buttonVariants}
                        whileHover={{ 
                            scale: 1.05,
                            x: 5,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Вступить
                        <GoArrowUpRight size={18} className='arrow'/>
                    </motion.button>
                </motion.div>
                
                <motion.div 
                    className="ours-curs"
                    variants={buttonsContainerVariants}
                >
                    <motion.button
                        variants={buttonVariants}
                        whileHover={{ 
                            scale: 1.03,
                            x: 8,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Начать карьеру в IT
                        <GoArrowUpRight size={18} className='arrow'/>
                    </motion.button>
                    
                    <motion.button
                        variants={buttonVariants}
                        whileHover={{ 
                            scale: 1.03,
                            x: 8,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Получить консультацию
                        <GoArrowUpRight size={18} className='arrow'/>
                    </motion.button>
                    
                    <motion.button
                        variants={buttonVariants}
                        whileHover={{ 
                            scale: 1.03,
                            x: 8,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Смотреть программу курса
                        <GoArrowUpRight size={18} className='arrow'/>
                    </motion.button>
                    
                    <motion.button
                        variants={buttonVariants}
                        whileHover={{ 
                            scale: 1.03,
                            x: 8,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Записаться на пробный урок
                        <GoArrowUpRight size={18} className='arrow'/>
                    </motion.button>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.6,
                            delay: 0.8,
                            ease: [0.34, 1.56, 0.64, 1]
                        }}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}