import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from 'react-router-dom';
import { MENU } from '../../utils/constans';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';


const Header = () => (
    <section className="header">
        <div className="container">
            <header>
                <Logo />
                <nav className="menu">
                    {MENU.map(({ link, name }, i) =>
                        <ScrollAnimation key={link} className="menu-item" animateIn="fadeInDown" delay={i * 100} offset={0}>
                            <NavLink to={`/${link}`}>
                                {name}
                            </NavLink>
                        </ScrollAnimation>)}
                </nav>
                <Socials/>
            </header>
        </div>
    </section>
)

export default Header


