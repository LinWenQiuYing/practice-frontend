import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'

// 创建并导出App组件
export default class App extends Component {

  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true,
      },
      {
        id: '002',
        name: '睡觉',
        done: true,
      },
      {
        id: '003',
        name: '打代码',
        done: false,
      },
    ],
  }

  // 状态在哪里，操作状态的方法就在哪里

  // 自定义子组件输入接收函数
  addTodo = todoObj => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, done}
      } else {
        return todo
      }
    })
    this.setState({todos: newTodos})
  }

  deleteTodo = id => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({todos: newTodos})
  }

  checkAllTodo = done => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      return {...todo, done}
    })
    this.setState({todos: newTodos})
  }

  deleteChecked = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => {
      return todo.done === false
    })
    this.setState({todos: newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteChecked={this.deleteChecked} />
      </div>
    )
  }
}