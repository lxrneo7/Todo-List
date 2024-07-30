import React from 'react'
import {FaPen, FaClipboardList} from "react-icons/fa"
import Todolist from '../src/components/TodoList'
import "./css/App.css"

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="logoside">
          <FaPen />
          <h1>what To do</h1>
          <FaClipboardList />

        </div>

      </div>
      <Todolist />

    </div>
  )
  ////////
}

export default App
