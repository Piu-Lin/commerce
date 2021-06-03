import React, { Component } from 'react'
import Crumb from './Crumb'
import Article from './Article'
import './index.css'
export default class Contextdetail extends Component {
    render() {
        return (
            <div className="Contextdetailbox">
                <Crumb/>
                <Article/>
            </div>
        )
    }
}
