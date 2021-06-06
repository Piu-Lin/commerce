import React, { Component } from 'react'
import Crumb from './Crumb'
import Article from './Article'
import Articlefoot from './Articlefoot'
import './index.css'
export default class Contextdetail extends Component {
    render() {
        const {simunav} = this.props
        console.log(simunav)
        return (
            <div className="Contextdetailbox">
                <Crumb simunav={simunav}/>
                {simunav === 0 ? (<><Article/><Articlefoot/></>) :("")}
            </div>
        )
    }
}
