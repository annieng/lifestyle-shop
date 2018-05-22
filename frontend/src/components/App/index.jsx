import  React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import axios from 'axios'

//importing own components
import Home from './Home'
import Shop from './Shop'

class App extends Component {
  constructor() {
    super()
    this.state = {
      username : '',
      cart: []
    }
  }
  // function for handling event of entering username
  // will also enable local storage to save username in local storage
  enterUsername = (event) => {
    event.preventDefault()
    let username = event.target.username.value
    localStorage.setItem('USER', JSON.stringify(username))
    let newUser = JSON.parse(localStorage.getItem('USER')) 
    
    if (username === '') {
      return alert('please enter at least one character')
      } else {
        alert ('thank you for joining club lift - go to our shop page <3') 
      }
    this.setState({
        username: newUser
      })
      event.target.username.value = ''
    }
    
  render() {
    return (
      <div>      
      <div className="App">
        <nav className='nav'>
          <h4>
            <Link to='/' 
              style={{ 
                textDecoration: 'none', 
                color: '#4D9897', 
                letterSpacing: '0.5rem'
                }}>
              | home |
            </Link>
            <Link to='/shop' 
              style={{ 
                textDecoration: 'none', 
                color: '#4D9897', 
                letterSpacing: '0.5rem' 
                }}>
            | shop |
            </Link>
          </h4>
        </nav>

        <header className="App-header">
          <h1 className="App-title"> club lift </h1>   
        </header>


          <Switch>
            <Route exact path='/' render={() => {
              return <Home
                username={this.state.username}
                enterUsername={this.enterUsername} />
            }}
            />
            <Route path='/shop' render={() => {
              return <Shop
                username={this.state.username}
                cart={this.state.cart}
              />
            }} />
          </Switch>

      </div>
    </div>
    )
  }
}

export default App;
