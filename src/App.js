import React, { Component } from 'react';
import './App.css';
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
    const HornsDropdownOptions = horns.map(hornAmount => <option value={hornAmount} key={hornAmount}>{hornAmount}</option>)
    
    const keywords = ['All', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']
    const KeywordDropdownOptions = keywords.map(keyword => <option value={keyword} key={keyword}>{keyword}</option>)

    const filteredCreatures = this.state.creatures.filter((creature) => 
    (this.state.filter === 'All' || Number(this.state.filter) === creature.horns) && 
    (this.state.keyword === 'All' || this.state.keyword === creature.keyword))

    return (
      <div className="App">
          <Header/>

          <select onChange={this.handleFilterChange}>
            {HornsDropdownOptions}
          </select>
          <select onChange={this.handleKeywordChange}>
          {KeywordDropdownOptions}
          </select>

          <ImageList creatures={filteredCreatures}/>
      </div>
    )
  }
}
export default App;
