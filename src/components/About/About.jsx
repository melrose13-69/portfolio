import React               from 'react';
import s                   from './About.module.scss';
import logo                from '../../assets/img/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { faJsSquare, faCss3Alt, faHtml5 }      from '@fortawesome/free-brands-svg-icons';
import { faAdjust }        from '@fortawesome/free-solid-svg-icons';

const About = props => {
    const skillLogos = [[faJsSquare, '#efd81d'], [faCss3Alt, '#2299f8'], [faHtml5, '#e54d26']];
    return (
        <div className='container'>
            <div className={ `${s.about} aboutItem` }>
                <div  className='page-title'>
                    <h1>About me</h1>
                </div>
                <div className={s.aboutBlock}>
                    <div className={s.text}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda beatae fugit nisi possimus suscipit tempore temporibus tenetur ut? Blanditiis deleniti dolorum enim expedita harum impedit officiis quam recusandae voluptates.</p></div>
                    <div className={s.logo}><img src={logo} alt=""/></div>
                </div>
            </div>
            <div className={`${s.skills} aboutItem`}>
                <div className="page-title">
                    <h1>My skills</h1>
                </div>
                <div className={s.items}>
                    {
                        props.skills.map((skill, index) => {
                            return (
                                <div key={`elem-${index}`} className={s.item}>
                                    <div className={s.itemLogo}><FontAwesomeIcon color={skillLogos[index][1]} icon={skillLogos[index][0]}/></div>
                                    <div className={s.itemTitle}>{skill.title}</div>
                                    <div className={s.itemDescr}>
                                        <ul>
                                            {
                                                skill.list.map((listItem, i) => {
                                                    return (
                                                        <li key={`list-${i}`}>
                                                            <div className={s.listStyle}>
                                                                <FontAwesomeIcon icon={faAdjust}/>
                                                            </div>
                                                            {listItem}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default About;