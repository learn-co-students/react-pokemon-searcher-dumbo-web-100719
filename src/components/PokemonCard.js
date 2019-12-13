import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    displayFront: true
  }

  flipCard = () => {
    this.setState({
      displayFront: !this.state.displayFront
    })
  }

  render() {
    console.log(this.props)
    let hpObj = this.props.stats.find((stat) => {
      return stat.name === "hp"
    })

  const imgPicker = this.state.displayFront ? this.props.sprites.front : this.props.sprites.back

    return (
      <Card>
        <div onClick={this.flipCard}>
          <div className="image">
            <img src={imgPicker} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpObj.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard


// {this.props['stats'].last["value"]}