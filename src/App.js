import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import ImageList from './components/ImageList';
import creaturesData from './data/creatures-data';

class App extends Component {
   state = {
    creatures: creaturesData,
    horns: 'All',
    keyword: 'All'
  }

  handleChange = (({target}, filter) => this.setState({ [filter]: target.value}))

  getDropdownOptions = (data, filter) => {
    const optionsArr = data.map(item => item[filter])
    const removeDuplicates = new Set(optionsArr)
    const dropdownOptionsArr = Array.from(removeDuplicates)
    
    return ['All', ...dropdownOptionsArr]
  }

  render() {
    const { creatures, horns, keyword } = this.state

    const hornOptions = this.getDropdownOptions(creatures, 'horns')
    const keywordOptions = this.getDropdownOptions(creatures, 'keyword')

    const filteredCreatures = creatures.filter((creature) => 
    (horns === 'All' || Number(horns) === creature.horns) && 
    (keyword === 'All' || keyword === creature.keyword))

    return (
      <div className="App">
          <Header/>

          <Dropdown options={hornOptions} onChange={(e) => this.handleChange(e,'horns')}/>
          <Dropdown options={keywordOptions} onChange={(e) => this.handleChange(e, 'keyword')}/>

          <ImageList creatures={filteredCreatures}/>
      </div>
    )
  }
}
export default App;
