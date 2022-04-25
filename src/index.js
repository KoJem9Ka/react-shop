import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './App'

Function.prototype.bindArgs = function (...boundArgs) {
  const targetFunction = this
  return function (...args) {
    return targetFunction.call(this, ...boundArgs, ...args)
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

