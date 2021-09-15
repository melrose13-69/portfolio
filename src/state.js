import explorerLogo from './assets/img/explorer.png';
import marketPlaceLogo from './assets/img/marketplace.png';

export const state = {
    skills: [
        {
            title: 'JavaScript',
            list: [ 'ReactJS / Redux', 'NodeJS (just for frontend)', 'Webpack', 'ES6', 'Babel' ]
        },
        {
            title: 'CSS3',
            list: [ 'Responsive Design', 'SCSS / LESS / SASS', 'Animation' ]
        },
        {
            title: 'HTML5',
            list: [ 'PUG / JADE' ]
        }
    ],
    portfolio: [
        {
            title: 'File Explorer',
            technologies: [ 'JavaScript', 'HTML5', 'SCSS', 'Webpack', 'Babel' ],
            link: 'https://melrose13-69.github.io/explorer/dist/',
            gitHub: 'https://github.com/melrose13-69/explorer',
            img: explorerLogo,
            description: 'Starting this task, I was inspired by the hosting admin panel. I thought I could do something similar, but without adding real files, but just structure and logic. It turned out 99%. I am finalizing a couple more ideas now, but I like the result. The site is not intended for mobile phones.'
        },
        {
            title: 'Pagination plugin',
            technologies: [ 'JavaScript', 'SCSS', 'Webpack', 'Babel' ],
            link: null,
            gitHub: 'https://github.com/melrose13-69/plugin-pagination',
            img: null,
            description: 'This is my first js plugin. During the execution, I learned a lot of new and interesting things related to the creation of pagins and different implementations. The plugin works provided that all the required parameters from the documentation are met. It is not completely ready, but the base is already done. There is still some error handling and some styling to be done. I plan to refine and add new functionality, there are already a few developments at the thinking stage. Demo not ready yet.'
        },
        {
            title: 'Online Store',
            technologies: [ 'ReactJS', 'Redux', 'JSX', 'SCSS', 'ReduxForm' ],
            link: 'https://melrose13-69.github.io/marketPlace/',
            gitHub: 'https://github.com/melrose13-69/marketPlace',
            img: marketPlaceLogo,
            description: 'My first project on ReactJS after completed course. I started the project from 0.. I did it by analogy with what we did on the course, but a lot was new to me, I really liked the ReactJS/Redux stack. It was interesting to write my own project using this technology. I would like to work more with ReactJS. Unfortunately, the mobile version is not yet ready. The project is not finished, there are still many ideas and improvements'
        },
    ]
};

export default state;