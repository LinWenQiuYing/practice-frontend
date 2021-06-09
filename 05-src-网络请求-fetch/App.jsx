import React, { Component } from 'react'
// import axios from 'axios'

export default class App extends Component {

  getStudentData = async() => {
    try {
      const response = await fetch('http://localhost:3000/data.json')
      const data = await response.json()
      console.log(data)
    } catch(err) {
      console.log(err)
    }
  }
  

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我一下</button>
      </div>
    )
  }
}
