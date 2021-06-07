import React, { Component } from 'react'
import Asidenav from './Asidenav'
import Contextdetail from './Contextdetail'
import './index.css'
export default class Context extends Component {
    state={
        simunav: 1
    }
    handlenav=(id)=>{
        this.setState({simunav:id})
    }
    render() {
        return (
                <div className="container">
                    <div className="row no-gutters">
                        <div id="asidegrid" className="col-sm-2 maincoloer">
                            <Asidenav simunav={this.state.simunav} handlenav={this.handlenav} />
                        </div>
                        <div className="col-sm-10">
                            <Contextdetail simunav={this.state.simunav}/>
                        </div>
                    </div>
                </div>
                )
             }
}
