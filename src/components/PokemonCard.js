import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    displayed: true
  }

  changeImage = () => {
    this.setState((prevState) => {
      return {
        displayed: !prevState.displayed
      }
    }
    )
  }

  renderHp = () => {
    let hpArr = this.props.pokemon.stats.filter(statObj => statObj.name === "hp")
    let hp= hpArr[0].value
    return hp
  }

  // {height, weight, id, name, abilities, moves, stats, types, sprites} = this.props.pokemon

  render() {
    const {name, sprites} = this.props.pokemon

    return (
      <Card onClick={this.changeImage}>
        <div>
          <div className="image">
            <img src={this.state.displayed ? sprites.front: sprites.back} alt="oh no!" />
          </div>
          <div className="content">
    <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.renderHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
