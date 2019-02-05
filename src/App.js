import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Machine from './components/Machine';

class App extends Component {
  render() {
    return (
      <div className="App bg-secondary" style={ {height: '100vh'} }>
        <Navbar />
        <div className="row align-items-center justify-content-center h-100">
            <div className="col-12 col-md-8">
              <Machine />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
