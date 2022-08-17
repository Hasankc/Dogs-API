import './App.css';
import React, { Component } from 'react';
import {Menu} from "./components/Menu"



class App extends Component {

  state = {
    breedsList: null,
    error: false
  }
  componentDidCatch() {
    this.fetchApi()
  }
  fetchApi = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all")
      if (response.ok) {
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
        <Select breedsList={this.state.breedsList} isError={this.state.error} />
        <BreedImage />
      </div>
    );
  }
}

export default App;
