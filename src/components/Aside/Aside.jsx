import React                               from 'react';
import s                                   from './Aside.module.scss';
import { FontAwesomeIcon }                 from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faPhoneAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin }                        from '@fortawesome/free-brands-svg-icons';
import { NavLink }                         from 'react-router-dom';

const Aside = props => {
    return (
        <aside className={ s.aside }>
            <div className={ s.logo }>
            </div>
            <nav className={ s.asideNav }>
                <ul className={s.asideMenu}>
                    <li><NavLink to={ '/home' } activeClassName={s.selected}>Home</NavLink><FontAwesomeIcon icon={ faLongArrowAltRight }/></li>
                    <li><NavLink to={ '/about' } activeClassName={s.selected}>About</NavLink><FontAwesomeIcon icon={ faLongArrowAltRight }/></li>
                    <li><NavLink to={ '/portfolio' } activeClassName={s.selected}>Portfolio</NavLink><FontAwesomeIcon icon={ faLongArrowAltRight }/></li>
                    <li><NavLink to={ '/contact' } activeClassName={s.selected}>Contact</NavLink><FontAwesomeIcon icon={ faLongArrowAltRight }/></li>
                </ul>
                <ul className={s.asideContacts}>
                    <li>
                        <a href="tel:37378238155"><FontAwesomeIcon icon={faPhoneAlt}/></a>
                        <span className={s.hover}>Phone</span>
                    </li>
                    <li>
                        <a rel='noreferrer' target='_blank' href="https://github.com/melrose13-69">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <span className={s.hover}>Github</span>
                    </li>
                    <li>
                        <a rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/victor-poltoratchi-279b141a3/">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <span className={s.hover}>LinkedIn</span>
                    </li>
                    <li>
                        <a href="mailto:poltoratchi1369@gmail.com"><FontAwesomeIcon icon={faEnvelopeOpen}/></a>
                        <span className={s.hover}>GMail</span>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;