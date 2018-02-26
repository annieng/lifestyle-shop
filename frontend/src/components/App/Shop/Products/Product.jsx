import React, { Component } from 'react'
import '../../Shop/Shop.css'


class Product extends Component {
  render() {
    return ( 
      <div className='one-third column'>
        <figure>
         <img src={this.props.product.picture} alt={this.props.product.name} className='product-image'/>
          <figurecaption> {this.props.product.name}</figurecaption>
          <button onClick={() => {this.props.addToCart(this.props.product)}}> add to cart </button>
        </figure>
      </div>
    )
  }
}

export default Product