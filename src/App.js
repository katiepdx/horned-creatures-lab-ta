import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import ImageList from './components/ImageList';
import creaturesData from './data/creatures-data';

class App extends Component {
   state = {
    creatures: creaturesData,
    filter: 'All',
    keyword: 'All'
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value})
  }
  handleKeywordChange = (e) => {
    this.setState({ keyword: e.target.value})
  }

  render() {
    const horns = ['All', 1, 2, 3, 100]
    const keywords = ['All', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']
 
    const filteredCreatures = this.state.creatures.filter((creature) => 
    (this.state.filter === 'All' || Number(this.state.filter) === creature.horns) && 
    (this.state.keyword === 'All' || this.state.keyword === creature.keyword))

    return (
      <div className="App">
          <Header/>

          <Dropdown options={horns} onChange={this.handleFilterChange}/>
          <Dropdown options={keywords} onChange={this.handleKeywordChange}/>

          <ImageList creatures={filteredCreatures}/>
      </div>
    )
  }
}
export default App;
