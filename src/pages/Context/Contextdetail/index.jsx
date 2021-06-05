import React, { Component } from 'react'
import Crumb from './Crumb'
import Article from './Article'
import Articlefoot from './Articlefoot'
import './index.css'
export default class Contextdetail extends Component {
    render() {
        return (
            <div className="Contextdetailbox">
                <Crumb/>
                <Article/>
                <Articlefoot/>
            </div>
        )
    }
}
