import React, { Component } from 'react'
import Pages from './pages'
import Experimental from './experimental'
export default class App extends Component {
  state={
    projectControl:1,
  }
  render() {
    const {projectControl}= this.state
    return (
      <>
      {projectControl === 0 ? (<Pages/>):(<Experimental/>)}
      </>
    )
  }
}
