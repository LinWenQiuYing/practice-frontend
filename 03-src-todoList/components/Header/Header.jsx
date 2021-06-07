import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './Header.css'

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  inputTask = (event) => {
    const { keyCode, target } = event
    if (keyCode !== 13)  return false
    if (target.value === '') return alert('输入不能为空')
    const todoObj = {id: nanoid(), name: target.value, done: false}
    this.props.addTodo(todoObj)
    target.value = '' // 清空输入
  }

  render() {
    return (
      <div>
        <input className="input-task" type="text" placeholder="请输入您的任务名称，按回车键确认" onKeyUp={this.inputTask} />
      </div>
    )
  }
}
