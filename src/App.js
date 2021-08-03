import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ImageList from './components/ImageList';
import creaturesData from './data/creatures-data';

class App extends Component {
   state = {
    creatures: creaturesData,
    filter: 'All'
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value})
  }

  render() {
    const filteredCreatures = this.state.creatures.filter((creature) => 
      this.state.filter === 'All' || Number(this.state.filter) === creature.horns
    )

    return (
      <div className="App">
          <Header/>

          <select onChange={this.handleFilterChange}>
            <option value='All'>All</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={100}>100</option>
          </select>

          <ImageList creatures={filteredCreatures}/>
      </div>
    )
  }
}
export default App;
