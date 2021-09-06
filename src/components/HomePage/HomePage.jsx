import React from 'react';
import s     from './HomePage.module.scss';

const HomePage = props => {
    return (
        <div className={ s.home }>
          <div className={ s.inner }>
                <div className={s.title}><h1>Hello, i`m Poltoratchi Victor</h1></div>
                <div className={s.descr}><p>Front-end developer</p></div>
          </div>
      </div>
    );
};

export default HomePage;