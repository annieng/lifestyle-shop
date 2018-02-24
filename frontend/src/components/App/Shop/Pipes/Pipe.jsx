import React, { Component } from 'react'

class Pipe extends Component {
  render() {
    return (
      <div>
        <img src={this.props.pipe.picture} alt={this.props.pipe.name} />
        <span> {this.props.pipe.name}</span>
        <button onClick={() => { this.props.addToCart(this.props.product) }}> add to cart </button>
      </div>
    )
  }
}

export default Pipe