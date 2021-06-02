import React, { Component } from 'react'
import Topheader from "./pages/Topheader"
import Navheader from './pages/Navheader'
import "./App.css"
export default class App extends Component {
  render() {
    return (
      <div>
         <Topheader/>
         <Navheader/>
         <div className="fengshui"></div>
      </div>
    )
  }
}
