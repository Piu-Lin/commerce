import React, { Component } from 'react'
import Topheader from "./Topheader"
import Navheader from './Navheader'
import Context from './Context'
import Footernav from './Footernav'
import "./index.css"
export default class Pages extends Component {
    bablechange=()=>{
        this.props.controlproject(1)
    }
    render() {
        return (
            <>
                <Topheader/>
                <Navheader/>
                <div onClick={this.bablechange} className="fengshui"></div>
                <Context/>
                <div id="emptybox"></div>
                <Footernav/>
            </>
        )
    }
}
