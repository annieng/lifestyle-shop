import React, { Component } from 'react'

class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.product.picture} alt={this.props.product.name} />
        <span> {this.props.product.name}</span>
        <button onClick={() => {this.props.addToCart(this.props.product)}}> add to cart </button>
      </div>
    )
  }
}

export default Product