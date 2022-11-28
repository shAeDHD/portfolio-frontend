import React from 'react';
import Projects from './components/Projects';
import Home from './components/Home'
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import './App.css';

class App extends React.Component{

  render () {

    return (

        <div className="App">
          
          <Router>
            <header>
              <nav>
                <Link to="/">Home</Link>
                {'  '}|{' '}
                <Link to="/projects">Projects</Link>
              </nav>
            </header>
            <hr />
            
            <Route exact path="/" component={ Home }/>
            <Route exact path="/projects" component={ Projects }/>

            <footer>
              <hr />
              &copy; shAeDHD 2022
            </footer>
          </Router>

        </div>

    );  //  end return()  

  }     //  end render()

};

export default App;