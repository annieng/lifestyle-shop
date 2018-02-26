import React, { Component } from 'react'
import Product from './Product'
import '../../Shop/Shop.css'

class Products extends Component {
  render() {
    let productsJSX = this.props.products.map((product, i) => {
      return <Product
        product={product}
        key={i}
        addToCart={this.props.addToCart}
      />
    })
    return (
      <div className='row'>
        {productsJSX}
      </div>
    )
  }
}

export default Products;