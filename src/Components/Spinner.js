import React, { Component } from 'react'
import loader from './loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
       <center> <img src={loader} alt='loader'  width="100" height="100"></img></center>
        
      </div>
    )
  }
}

export default Spinner
