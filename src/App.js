import React from 'react'
import './App.css';

import Particles from 'react-particles-js';

import NavigationBar from './components/navigation-bar/navigation-bar.component';
import IngredientsInput from './components/ingredients-input/ingredients-input.component'


const APIKey = process.env.REACT_APP_EDAMAM_API_KEY;
const edamamId = process.env.REACT_APP_EDAMAM_ID;

const params = {
  background: {
    color: {
      value: "#d3deff",
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#000000",
    },
    links: {
      color: "#000000",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 1000,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
};

class App extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount() {
    console.log('testing');
  }

  render () {
  return (
    <div className="App">
      <Particles
      className="particles"
      params={params}
    />
      <NavigationBar />
      <h1 className='p-3 m-3'>Nutrition Value Calculator</h1>
      <h4 className='p-3 m-3'>Insert the ingredients of your meal, you can use measures, number of items, cups, spoons, etc</h4>
      <IngredientsInput />
    </div>
  );
  }
}

export default App;
