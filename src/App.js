import React, { Component } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
const $ = window.$;

class App extends Component {

  constructor(){
    super()
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel();
    });
  }
  
  render(){
    return (
      <div className="App">
        <div class="owl-carousel owl-theme">
          <div> Your Content </div>
          <div> Your Content </div>
          <div> Your Content </div>
          <div> Your Content </div>
          <div> Your Content </div>
          <div> Your Content </div>
          <div> Your Content </div>
        </div>
      </div>
    )
  }
}
export default App;
