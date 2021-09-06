import React                   from 'react';
import s                       from './Aside.module.scss';
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink }             from 'react-router-dom';

const Aside = props => {
    return (
        <aside className={ s.aside }>
            <div className={ s.logo }>
            </div>
            <nav className={ s.asideNav }>
                <ul>
                    <li><NavLink to={ '/home' } activeClassName={s.selected}>Home</NavLink><FontAwesomeIcon icon={ faLongArrowAltRight }/></li>
                    <li><NavLink to={ '/about' } activeClassName={s.selected}>About</NavLink><FontAwesomeIcon icon={ faLongArrowAltRight }/></li>
                    <li><NavLink to={ '/portfolio' } activeClassName={s.selected}>Portfolio</NavLink><FontAwesomeIcon icon={ faLongArrowAltRight }/></li>
                    <li><NavLink to={ '/contact' } activeClassName={s.selected}>Contact</NavLink><FontAwesomeIcon icon={ faLongArrowAltRight }/></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;