import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentData = () => {
    console.log('bingo')
    axios.get('http://localhost:3000/index.html')
      .then(data => {
        console.log(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我一下</button>
      </div>
    )
  }
}
