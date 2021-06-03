import React, { Component } from 'react'
import Topheader from "./pages/Topheader"
import Navheader from './pages/Navheader'
import Context from './pages/Context'
import "./App.css"
export default class App extends Component {
  render() {
    return (
      <div>
        <Topheader/>
        <Navheader/>
        <div className="fengshui"></div>
        <Context/>
      </div>
    )
  }
}
