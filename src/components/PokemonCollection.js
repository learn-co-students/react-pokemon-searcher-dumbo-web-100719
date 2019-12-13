import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
// import uuid from 'uuid' //this is unnecessary if we have line 13

class PokemonCollection extends React.Component {



  render() {

    const getPokemon = this.props.pokeArray.map((pokemon) => {
      const uuidv4 = require('uuid/v4')
      return <PokemonCard key={uuidv4()} {...pokemon} stats={pokemon.stats} sprites={pokemon.sprites}/> 
      // return <PokemonCard pokemon={pokemon} /> //this nests the info inside props.pokemon

    }
    )

    return (
      <Card.Group itemsPerRow={6}>
        {getPokemon}
        {/* some sort of map or something */}
        {/* <h1>Hello From Pokemon Collection</h1> */}
      </Card.Group>
    )
  }
}

export default PokemonCollection
