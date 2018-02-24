import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        
        <main>
          <h4> enter some name we can use for you</h4>
          <form name='username' onSubmit={(event) => { this.props.enterUsername(event)}}>
            <input type='text' name='username' />
            <button type='submit'/>          
          </form>
        </main>
      </div>
    )
  }
}

export default Home