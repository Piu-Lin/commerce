import React, { Component } from 'react'
import Topheader from "./pages/Topheader"
import Navheader from './pages/Navheader'
import Context from './pages/Context'
import Footernav from './pages/Footernav'
import "./App.css"
export default class App extends Component {
  render() {
    return (
      <>
        <Topheader/>
        <Navheader/>
        <div className="fengshui"></div>
        <Context/>
        <div id="emptybox"></div>
        <Footernav/>
      </>
    )
  }
}
