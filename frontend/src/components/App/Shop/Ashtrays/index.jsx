import React, { Component } from 'react'
import Ashtray from './Ashtray'

class Ashtrays extends Component {
  render() {
    let ashtrays = this.props.products.filter(product => product.type === 'ashtray')
    let ashtraysJSX = ashtrays.map((ashtray, i) => {
      return <Ashtray
        ashtray={ashtray}
        key={i}
        addToCart={this.addToCart}
      />
    })
    return (

      <div>
        <h4> hallucinatory ashtrays</h4>
        {ashtraysJSX}
      </div>
    )
  }
}

export default Ashtrays;