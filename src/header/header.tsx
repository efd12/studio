import './header_styles.css'
import { useState } from 'react'

export default function Header(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <header>
            <h3 className="logo">studio</h3>
            <menu className={isOpen ? 'active' : ''}>
                <li><a href="#" onClick={() => setIsOpen(false)}>главная</a></li>
                <li><a href="#" onClick={() => setIsOpen(false)}>специальность</a></li>
                <li><a href="#" onClick={() => setIsOpen(false)}>курсы</a></li>
                <li><a href="#" onClick={() => setIsOpen(false)}>контакты</a></li>
            </menu>
            <div 
                className={`burger ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
            </div>
        </header>
    )
}