import React, { Component } from 'react';
import Header from './Header';
import SliderC from './Slider';

class App extends Component {
  render(){
    return (
      <div>
      <Header/>
      <div>
        <SliderC/>
      </div>
      </div>   
    );
  }
}

export default App;
