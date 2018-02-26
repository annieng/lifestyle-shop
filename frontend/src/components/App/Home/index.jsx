import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
          <h4 className='login'> join club lift </h4>
          <form className='login' action ='submit' name='username' onSubmit={(event) => { this.props.enterUsername(event)}}>
            <input type='text' name='username' placeholder='new-club-id' />
            <button type='submit' > get lifted </button>          
          </form>
      </div>
    )
  }
}

export default Home