import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'
//import components
import Ashtrays from './Ashtrays'
import Pipes from './Pipes' 
import Product from './Product'
import Cart from './Cart'


class Shop extends Component {
  constructor() {
    super()
    this.state = ({
      products : [
        {
          name: 'Fundamental Iridescent Ashtray - Rose Quartz',
          price: 95,
          picture: '/images/ashtray1.jpg',
          type: 'ashtray'
        },
        {
          name: 'Fundamental Iridescent Ashtray - Emerald',
          price: 95,
          picture: '/images/ashtray2.jpg',
          type: 'ashtray'
        },
        {
          name: 'Black Block Marble Ashtray',
          price: 95,
          picture: '/images/ashtray3.jpg',
          type: 'ashtray'
        },
        {
          name: 'Stoned Ware Marbled Ashtray',
          price: 95,
          picture: '/images/ashtray4.jpg',
          type: 'ashtray'
        }, 
        {
          name: 'High Life Speckled Ashtray',
          price: 95,
          picture: '/images/ashtray5.jpg',
          type: 'ashtray'
        }, 
        {
          name: 'Space Time Iridescent Ashtray',
          price: 95,
          picture: '/images/ashtray6.jpg',
          type: 'ashtray'
        },
        {
          name: 'Vintage Gold Glass Ashtray',
          price: 95,
          picture: '/images/ashtray7.jpg',
          type: 'ashtray'
        }, 
        {
          name: 'Rose Vase Ashtray',
          price: 95,
          picture: '/images/ashtray8.jpg',
          type: 'ashtray'
        }, 
        {
          name: 'Basic Millenial Pink Ashtray',
          price: 95,
          picture: '/images/ashtray9.jpg',
          type: 'ashtray'
        },
        {
          name: 'Rose Brass Pipe',
          price: 95,
          picture: '/images/pipe1.jpg',
          type: 'pipe'
        },
        {
          name: 'Decahedron Pipe',
          price: 95,
          picture: '/images/pipe2.jpg',
          type: 'pipe'
        },
        {
          name: 'Baby Blue Clay Pipe - Assorted',
          price: 95,
          picture: '/images/pipe3.jpg',
          type: 'pipe'
        },
        {
          name: 'Donut Pipe',
          price: 95,
          picture: '/images/pipe4.jpg',
          type: 'pipe'
        },
        {
          name: 'Hot Dog Pipe',
          price: 95,
          picture: '/images/pipe5.jpg',
          type: 'pipe'
        },
        {
          name: 'Balance Pipe - Teal',
          price: 95,
          picture: '/images/pipe6.jpg',
          type: 'pipe'
        },
        {
          name: 'Glazed Clay Pipe - Assorted',
          price: 95,
          picture: '/images/pipe7.jpg',
          type: 'pipe'
        },
        {
          name: 'Balance Pipe - Rose',
          price: 95,
          picture: '/images/pipe8.jpg',
          type: 'pipe'
        },
        {
          name: 'Balance Pipe - Deep Blue',
          price: 95,
          picture: '/images/pipe9.jpg',
          type: 'pipe'
        }
      ],

      cart : []

    })
  }

  componentDidMount() {
    axios.get("http://localhost:4420/shop")
      .then((res) => {
        console.log(res)
        console.log(res.data)
        this.setState({
          cart: res.data
        })
      })
  }

  componentWillUpdate() {
    axios.post('http://localhost:4420/shop', { cart: this.state.cart })
      .then((res) => {
        if (res.data.success) {
          console.log('cart saved')
        }
      })
  }

  // add to cart function

  addToCart = (product) => {  
    let addProduct = {
      name: product.name,
      price: product.price,
      picture: product.picture,
      type: product.type 
      }

    let cart = this.state.cart
    cart.push(addProduct)
      
      this.setState ({
        cart
      })
    }

  render() {
    console.log(this.state.cart)
    let productsJSX = this.state.products.map(( product, i ) => {
      return <Product 
        product={product} 
        key={i} 
        addToCart={this.addToCart}
        />
    })
    
    let cartJSX = this.state.cart.map( (cartItem, i) => {
      return <Cart 
        cartItem={cartItem}
        key= {i}
        />
    })

    return (
      
      <div>
        <h3> lets get high cutie take a look </h3>
        <nav>        
          <Link to='/shop/pipes'>
            <button type='button'>~~pipes~~</button>
          </Link>         
          <Link to='/shop/ashtrays'>
            <button type='button'>~~ashtrays~~</button>
          </Link>

          {/* SETTING ROUTES HERE */}
          <Switch>
            <Route path='/shop/pipes' render={() => { return <Pipes  products={this.state.products}/> }} />
            <Route path='/shop/ashtrays' render={() => { return <Ashtrays products={this.state.products} /> }}/>
          </Switch>
        </nav>

        <main className='container-fluid'>
          <h1> welcome {this.props.username} </h1>
          {productsJSX}
        </main>
        <div className='container-fluid'>
          <h1> Cart </h1>
          <ul>
            {cartJSX}
          </ul>
          <span> your cart total is : </span>
        </div>
      </div>

    )
  }
}

export default Shop