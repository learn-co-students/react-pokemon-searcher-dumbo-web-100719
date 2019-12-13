import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokeArray: [],
    searchString: ""
  };

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(pokemon => this.setState({ pokeArray: pokemon }));
  }

  handleSearch = (event) => {
    this.setState({ searchString: event.target.value }) 
  }

  // hope's idea: pass in 4 arguments here
  handleCreate = (newPokeName, newPokehp, newPokeFront, newPokeAss) => {
    let newPoke = {
      name: newPokeName,
      stats: [
        {
          name: "hp",
          value: newPokehp
        }
      ],
      sprites: {
        front: newPokeFront,
        back: newPokeAss
      }
    }
    this.setState({
      pokeArray: [newPoke, ...this.state.pokeArray]
    })

    // this.setState({
    //   pokeArray: [...this.state.pokeArray, newPoke]
    // })
  }
  

  render() {
    const desiredPokemon = this.state.pokeArray.filter(pokemon =>
      pokemon.name.includes(this.state.searchString)
    )
    return (
    
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleCreate={this.handleCreate}/>
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokeArray={desiredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
