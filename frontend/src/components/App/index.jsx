import  React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'

//importing components
import Home from './Home'
import Shop from './Shop'
import Nav from './Nav'

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
    this.setState({
        username: newUser
      })
      event.target.username.value = ''
    }
    
  render() {
    console.log(this.state.username)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> high life </h1>
          
          <Switch>
            <Route exact path='/' render={() => { return <Home 
              username={this.state.username} 
              enterUsername={this.enterUsername}/>}} 
            />
            <Route path='/shop' render={() => { return <Shop
              username={this.state.username}
              cart={this.state.cart}
              /> }} />
          </Switch>

        </header>

        <nav>
          <Nav />
        </nav>

        <main>
        </main>

          
       
      </div>
    );
  }
}

export default App;
