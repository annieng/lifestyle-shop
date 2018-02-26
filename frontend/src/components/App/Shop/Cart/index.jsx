import React, {Component} from 'react'

class Cart extends Component {
  render() {
    return (
      <div>
        <li> <img src={this.props.cartItem.picture} alt={this.props.cartItem.name} /></li>
        <li> {this.props.cartItem.name}</li>
        <li> {this.props.cartItem.price}</li>
        <button name='remove-item' onClick={this.props.removeFromCart}> remove from cart </button>
      </div>
    )
  }
}

export default Cart