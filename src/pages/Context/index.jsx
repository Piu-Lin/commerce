import React, { Component } from 'react'
import Asidenav from './Asidenav'
import Contextdetail from './Contextdetail'
import './index.css'
export default class Context extends Component {
    render() {
        return (
                <div className="container">
                    <div className="row no-gutters">
                        <div id="asidegrid" className="col-sm-2 maincoloer">
                            <Asidenav/>
                        </div>
                        <div className="col-sm-10">
                            <Contextdetail/>
                        </div>
                    </div>
                </div>
                )
             }
}
