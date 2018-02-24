import React, {Component} from 'react'

class Cart extends Component {
  render() {
    return (
      <div>
        <li> <img src={this.props.cartItem.picture} alt={this.props.cartItem.name} /></li>
        <li> {this.props.cartItem.name}</li>
        <li> {this.props.cartItem.price}</li>
      </div>
    )
  }
}

export default Cart