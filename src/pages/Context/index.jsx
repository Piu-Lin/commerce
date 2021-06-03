import React, { Component } from 'react'
import Asidenav from './Asidenav'
import './index.css'
export default class Context extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-sm-2 maincoloer">
                            <Asidenav/>
                        </div>
                        <div className="col-sm-9">contex</div>
                    </div>
                   
                    </div>
            </div>
        )
    }
}
