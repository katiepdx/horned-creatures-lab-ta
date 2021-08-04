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

  handleFilterChange = (e) => this.setState({ filter: e.target.value})
  handleKeywordChange = (e) => this.setState({ keyword: e.target.value})

  getDropdownOptions = (data, filter) => {
    const optionsArr = data.map(item => item[filter])
    const removeDuplicates = new Set(optionsArr)
    const dropdownOptionsArr = Array.from(removeDuplicates)
    
    return ['All', ...dropdownOptionsArr]
  }

  render() {
    const horns = this.getDropdownOptions(this.state.creatures, 'horns')
    const keywords = this.getDropdownOptions(this.state.creatures, 'keyword')

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
