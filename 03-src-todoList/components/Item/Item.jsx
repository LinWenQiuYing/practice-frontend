import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {

  changeCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  handleDelete = id => {
    if(window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { name, done, id } = this.props
    return (
      <li className="list-item">
        <label>
          <input type="checkbox" checked={done} onChange={this.changeCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={()=> this.handleDelete(id)} className="btn btn-danger">删除</button>
      </li>
    )
  }
}
