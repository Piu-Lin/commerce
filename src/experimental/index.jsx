import React, { Component } from 'react'
import Extopnav from './Extopnav'
import Exasiadenav from './Exasiadenav'
import Excontent from './Excontent'
import Exfooter from './Exfooter'
import "./index.css"
export default class Experimental extends Component {
    bablechange=()=>{
        this.props.controlproject(0)
    }
    render() {
        return (
            <>
                <Extopnav/>
                <div onClick={this.bablechange} className="exmainpic">
                    <img src="./img/hznu.jpg" alt="首页封面" />
                </div>
                <div className="exmaincontent container">
                    <div className="row">
                        <div className="col-3">
                            <Exasiadenav/>
                        </div>
                        <div className="col-9">
                            <Excontent/>
                        </div>
                    </div>
                    <Exfooter/>
                </div>
                
            </>
        )
    }
}
