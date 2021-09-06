import React                   from 'react';
import s                       from './Portfolio.module.scss';
import Fancybox                from '../Fancybox/Fancybox';
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome/index.es';
import { faLink, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faGithub }            from '@fortawesome/free-brands-svg-icons';
import { faComment }           from '@fortawesome/free-regular-svg-icons/faComment';


const Portfolio = props => {

    return (
        <div className='container'>
            <div className={ s.portfolio }>
                <div className='page-title'>
                    <h1>Portfolio</h1>
                </div>
                <div className={ s.items }>
                    {
                        props.portfolio.map( ( item, index ) => {
                            return (
                                <div key={ `item-${index}` } className={ s.item }>

                                        <Fancybox>
                                            <a data-fancybox href={ item.img } className={ s.img }>
                                                <img src={ item.img } alt="project_logo"/>
                                            </a>
                                        </Fancybox>

                                    <div className={ s.info }>
                                        <div className={ `${s.infoName} ${s.infoItem}` }>
                                            <span className={ s.title }>Project name <FontAwesomeIcon icon={ faLink }/> : </span>
                                            <a href={ item.link } target='_blank' rel="noreferrer" className={ s.name }>
                                                { item.title }
                                            </a>
                                        </div>
                                        <div className={ `${s.infoGithub} ${s.infoItem}`}>
                                           <span className={ s.title }>Github <FontAwesomeIcon icon={ faGithub }/> : </span>
                                            <a href={ item.gitHub } target='_blank' rel="noreferrer" className={ s.name }>
                                                { item.gitHub }
                                            </a>
                                        </div>
                                        <div className={ s.technologies }>
                                            <span className={ s.title }>Technologies <FontAwesomeIcon icon={ faMicrochip }/> : </span>
                                            <ul>
                                                {
                                                    item.technologies.map( ( elem, i ) => {
                                                        return <li key={ `element-${i}` }>{ elem }</li>;
                                                    } )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={s.description}>
                                        <span className={ s.title }>Description <FontAwesomeIcon icon={ faComment }/> : </span>
                                        <p>{ item.description }</p>
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

export default Portfolio;