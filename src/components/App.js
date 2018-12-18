import React, { Component } from 'react';
import Header from './Header';
import SliderC from './Slider';
import MainText from './maintext';
import Footer from './footer';

class App extends Component {
  render(){
    const texto = {
        h1: 'Lorem ipsum dolor sit amet. ',
        p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra sodales ante. Vestibulum a dui et nulla scelerisque suscipit.Proin tempor viverra consectetur. Nullam laoreet elit vel luctus scelerisque. Praesent at facilisis neque. Nullam mattis magna non nunc ullamcorper, ac consequat orci pharetra. Morbi at urna gravida, commodo tellus nec, feugiat velit. Vestibulum quis mi aliquet, commodo orci eget, consectetur mi. Donec eget libero ut elit lacinia pretium. '
    }
    return (
      <div>
        <Header/>

      <div className="carusel">
        <SliderC/>

      <div className="body">
        <MainText
         h1 = {texto.h1}
         p = {texto.p}
        />
      </div>

      </div>
      <div className="footer">
         <Footer/>
      </div>
    </div>
         
    );
  }
}

export default App;
