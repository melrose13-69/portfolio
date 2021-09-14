import React from 'react';
import s from './About.module.scss';
import logo from '../../assets/img/photo.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { faJsSquare, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';


const About = props => {
    const skillLogos = [ [ faJsSquare, '#efd81d' ], [ faCss3Alt, '#2299f8' ], [ faHtml5, '#e54d26' ] ];
    return (
        <div className='container'>
            <div className={ `${ s.about } aboutItem` }>
                <div className='page-title'>
                    <h1>About me</h1>
                </div>
                <div className={ s.aboutBlock }>
                    <div className={ s.text }>
                        <p>Hey! My name is Victor. I am an ambitious and curious person. I really like to learn
                            something new and draw knowledge from more experienced colleagues. I know how to work in a
                            team. The projects in my portfolio are not done as well as I would like, but every day I
                            learn something new and fix bugs and refine my projects. Unfortunately, in my company I do
                            not have a senior developer, I have to learn everything on my own. The biggest problem is
                            that I don't know how much I did it right. You have to google a lot, but there is not always
                            an answer. I am ready to learn new knowledge and learn new technologies.</p>
                    </div>
                    <div className={ s.logo }><img src={ logo } alt=""/></div>
                </div>
            </div>
            <div className={ `${ s.skills } aboutItem` }>
                <div className="page-title">
                    <h1>My skills</h1>
                </div>
                <div className={ s.items }>
                    {
                        props.skills.map( ( skill, index ) => {
                            return (
                                <div key={ `elem-${ index }` } className={ s.item }>
                                    <div className={ s.itemLogo }><FontAwesomeIcon color={ skillLogos[ index ][ 1 ] }
                                                                                   icon={ skillLogos[ index ][ 0 ] }/>
                                    </div>
                                    <div className={ s.itemTitle }>{ skill.title }</div>
                                    <div className={ s.itemDescr }>
                                        <ul>
                                            {
                                                skill.list.map( ( listItem, i ) => {
                                                    return (
                                                        <li key={ `list-${ i }` }>
                                                            <div className={ s.listStyle }>
                                                                <FontAwesomeIcon icon={ faAdjust }/>
                                                            </div>
                                                            { listItem }
                                                        </li>
                                                    );
                                                } )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            );
                        } )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;