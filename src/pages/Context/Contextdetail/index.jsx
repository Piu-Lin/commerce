import React, { Component } from 'react'
import Crumb from './Crumb'
import Article from './Article'
import Articlefoot from './Articlefoot'
import Figure from './Figure'
import './index.css'
export default class Contextdetail extends Component {
    render() {
        const {simunav} = this.props
        return (
            <div className="Contextdetailbox">
                <Crumb simunav={simunav}/>
                {simunav === 0 ? (<><Article/><Articlefoot/></>) :(<Figure/>)}
            </div>
        )
    }
}
