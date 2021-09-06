import React               from 'react';
import s                   from './Portfolio.module.scss';
import Fancybox            from '../Fancybox/Fancybox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { faLink }          from '@fortawesome/free-solid-svg-icons';

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
                                    <div className={ s.img }>
                                        <Fancybox>
                                            <a data-fancybox href={ item.img }>
                                                <img src={ item.img } alt="project_logo"/>
                                            </a>
                                        </Fancybox>
                                    </div>
                                    <div className={ s.info }>
                                        <span className={s.tehTitle}>Project name: </span>
                                        <a href={ item.link } target='_blank' rel="noreferrer" className={ s.name }>
                                            { item.title }
                                            <FontAwesomeIcon icon={ faLink }/>
                                        </a>
                                        <div className={ s.technologies }>
                                            <span className={s.tehTitle}>Technologies: </span>
                                            <ul>
                                                {
                                                    item.technologies.map( ( elem, i ) => {
                                                        return <li key={ `element-${i}` }>{ elem }</li>;
                                                    } )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div><p>{ item.description }</p></div>
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