import React, { Component } from 'react'
import '../../Shop/Shop.css'

class Pipe extends Component {
  render() {
    return (
      <div className='one-third column' >
        <figure>
          <img src={this.props.pipe.picture} alt={this.props.pipe.name} className='product-image' />
          <figcaption> {this.props.pipe.name}</figcaption>
          <button onClick={() => {this.props.addToCart(this.props.pipe) }}> add to cart </button>
        </figure>
      </div>
    )
  }
}

export default Pipe