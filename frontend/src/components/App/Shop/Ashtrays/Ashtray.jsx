import React, { Component } from 'react'
import '../../Shop/Shop.css'

class Ashtray extends Component {
  render() {
    return (
     
      <div className='one-third column' >
        <figure>
        <img src={this.props.ashtray.picture} alt={this.props.ashtray.name} className='product-image'/>
        <figcaption> {this.props.ashtray.name}</figcaption>
        <button onClick={() => { this.props.addToCart(this.props.ashtray) }}> add to cart </button>
        </figure>
      </div>
    )
  }
}

export default Ashtray