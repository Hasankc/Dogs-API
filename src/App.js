import './App.css';
import React, { Component } from 'react';
import Menu from "./components/menu/Menu"
import Select from "./components/select/Select"
import BreedImage from "./components/breed/BreedImage"



class App extends Component {

  state = {
    selectedBreed: null,
    breedsList: null,
    error: false
  }
  componentDidMount() {
    this.fetchApi()
  }
  fetchApi = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      if (response.ok) { //code 200
        const data = await response.json()
        this.setState({
          breedsList: Object.keys(data.message)
        })
      } else {
        this.setState({
          error: true
        })
        alert('Sorry, can not display the data')
      }
    } catch (e) { //code will jump here if there is a network problem
      this.setState({
        error: true
      })
      alert('Sorry, can not  display the data')
    }
  }
  selectHandler = (breed) => {
    this.setState({
      selectedBreed: breed
    })
  }
  render() {
    return (
      <div className="App">
        <Menu />
        <Select breedsList={this.state.breedsList} onSelect={this.selectHandler} isError={this.state.error} />
        <BreedImage breed={this.state.selectedBreed}/>
      </div>
    );
  }
}

export default App;
