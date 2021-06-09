import React, { Component } from 'react'
import Pages from './pages'
import Experimental from './experimental'
export default class App extends Component {
  state={
    projectControl:0,
  }
  controlproject=(tobe)=>{
    this.setState({projectControl:tobe})
  }
  render() {
    const {projectControl}= this.state
    return (
      <>
      {projectControl === 0 ? (<Pages controlproject={this.controlproject}/>):(<Experimental controlproject={this.controlproject}/>)}
      </>
    )
  }
}
