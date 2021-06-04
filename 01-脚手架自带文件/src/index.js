// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React.StrictMode标签帮助提示reactAPI的使用是否规范
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 用于记录页面性能
reportWebVitals();
