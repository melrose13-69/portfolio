import './App.scss';
import React, {useEffect}     from 'react';
import Aside     from './components/Aside/Aside';
import { Route } from 'react-router-dom';
import HomePage  from './components/HomePage/HomePage';
import About     from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

const App = props => {
    const callAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();

      if(response.status !== 200) {
          throw Error(body.message)
      }
      return body;
    };
    useEffect(() => {
        callAPI().then(resp => {
            debugger
        })
    }, []);

    return (
        <div className='wrapper'>
        <Aside/>
        <main>
            <Route path={ '/home' } render={ () => <HomePage/> }/>
            <Route path={ '/about' } render={ () => <About skills={props.state.skills}/> }/>
            <Route path={ '/portfolio' } render={ () => <Portfolio portfolio={props.state.portfolio}/> }/>
        </main>
      </div>
    );
};

export default App;
