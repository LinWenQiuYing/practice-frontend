import React, { Component } from 'react'
import Hello from './components/Hello/Hello'
// const { Component } = React

// 创建并导出App组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}