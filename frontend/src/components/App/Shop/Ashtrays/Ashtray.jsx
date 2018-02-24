import React, { Component } from 'react'


class Ashtray extends Component {
  render() {
    return (
      <div>
        <img src={this.props.ashtray.picture} alt={this.props.ashtray.name} />
        <span> {this.props.ashtray.name}</span>
        <button onClick={() => { this.props.addToCart(this.props.product) }}> add to cart </button>
      </div>
    )
  }
}

export default Ashtray