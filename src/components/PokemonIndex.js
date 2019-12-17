import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokeArray: [],
    searchTerm: ""
  }

  handleSearch = (searchValue) => { 
    this.setState({
      searchTerm: searchValue
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    let pokeinfo = {
      name: evt.target.name.value,
      hp: evt.target.hp.value,
      front: evt.target.frontUrl.value,
      back: evt.target.backUrl.value
    }
    
    fetch(`http://localhost:3000/pokemon`, {
      method:'POST',
     headers: { 
         'Content-type': 'application/json',
         'accept': 'application/json'
     },
     body: JSON.stringify({
      name: pokeinfo.name,
      stats: [{
        name: "hp",
        value: pokeinfo.hp
      }],
      sprites: {
        front: pokeinfo.front,
        back: pokeinfo.back
      } 
      })
    })
    .then(resp => resp.json())
    .then(addedPokeObj => this.setState((prevState) => {
      return {
        pokeArray: [...prevState.pokeArray, addedPokeObj ]
      }
    }
    ))
  }

  whichArray = () => {
    let newArray = [...this.state.pokeArray]
    if (this.state.searchTerm === ""){
      newArray = [...this.state.pokeArray]
    } else {
      newArray = newArray.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    }
    return newArray
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(resp => resp.json())
    .then(res => this.setState({pokeArray: res}))
  }


  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokeArray={this.whichArray()} />
      </Container>
    )
  }
}

export default PokemonPage
