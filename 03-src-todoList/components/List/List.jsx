import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item'
import './List.css'

export default class List extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <div className="task-list">
        {
          todos.map(todo => {
            return <Item key={todo.id} name={todo.name} done={todo.done} id={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          })
        }
      </div>
    )
  }
}
