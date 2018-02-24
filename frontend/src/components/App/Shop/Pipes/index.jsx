import React, {Component} from 'react'
import Pipe from './Pipe'

class Pipes extends Component {
  render() {
    let pipes = this.props.products.filter(product => product.type === 'pipe') 
    let pipesJSX = pipes.map((pipe, i) => {
      return <Pipe 
        pipe={pipe}
        key={i}
        addToCart={this.addToCart}
      />
    })
    return (

      <div>
        <h4> pipes to get high with</h4>
        {pipesJSX}
      </div>
    )
  }
}

export default Pipes;