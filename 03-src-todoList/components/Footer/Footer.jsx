import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {

  checkAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  deleteChecked = () => {
    if(window.confirm('确定删除吗？')) {
      this.props.deleteChecked()
    }
  }

  render() {
    const { todos } = this.props
    const doneNum = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0) // 已完成的数量
    const total = todos.length // 总数
    return (
      <div className="footer-item">
        <div className="footer-text">
          <label>
            <input type="checkbox" checked={doneNum === total && total !== 0 ? true : false} onChange={this.checkAll} />
          </label>
          <span>已完成{doneNum}</span>
          /
          <span>全部{total}</span>
        </div>
        <button className="btn-danger-checked" onClick={this.deleteChecked}>清除已完成任务</button>
      </div>
    )
  }
}
