import React, {Component} from 'react'
import '../../Shop/Shop.css'

class Cart extends Component {
  render() {
    return (
      <div className='cart-product'>
        <div className='cart-product-img'>
          <img src={this.props.cartItem.picture} alt={this.props.cartItem.name} />
        </div>
        <div className='cart-product-info'>
          <li> {this.props.cartItem.name}</li>
          <li> {this.props.cartItem.price}</li>
          <button className='reduce-item'>-</button><span>1</span><button className='increase-item'>+</button>
          
        </div>
      </div>
    )
  }
}

export default Cart