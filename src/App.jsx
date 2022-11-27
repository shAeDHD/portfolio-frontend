import React from 'react';
import './App.css';

class App extends React.Component{


  render () {

    const bearName = "Paddington";
    const imgURL = "http://placebear.com/300/300"

    return (
        <div className="App">
          <h1>Hello React!</h1>
          <img src={ imgURL }/>
        </div>
    );

  }   //  end render()

};

export default App;