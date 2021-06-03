import React, { Component } from 'react'
import './index.css'
export default class Asidenav extends Component {
    render() {
        return (
            <div >
                <div className="asidemainbox">
                    <div className="asidetitlebox">
                        <div className="asidetitleword">
                        学院概况
                        </div>
                    </div>
                    <div className="asideitembox chiosenasise">
                        学院简介
                    </div>
                    <div className="asideitembox">
                        学院理事
                    </div>
                    <div className="asideitembox">
                        学院领导
                    </div>
                    <div className="asideitembox">
                        机构设置
                    </div>
                </div>
                
            </div>
        )
    }
}
