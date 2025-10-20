import './main_styles.css'
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import { motion } from 'framer-motion';

export default function Main() {
    const cards = [
        { id: 1, image: img1 },
        { id: 2, image: img2 },
        { id: 3, image: img3 }
    ]

    return (
        <div className="mainBlock">
            <div className="grid">
                {cards.map((card, index) => (
                    <motion.div 
                        key={card.id}
                        className="card"
                        style={{ 
                            height: `${200 + index * 80}px`,
                            backgroundImage: `url(${card.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                        initial={{ opacity: 0, y: 80, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                            duration: 0.8,
                            delay: index * 0.15,
                            ease: [0.25, 0.46, 0.45, 0.94], // Красивая плавная кривая
                        }}
                    >
                    </motion.div>
                ))}
            </div>
        </div>
    )
}