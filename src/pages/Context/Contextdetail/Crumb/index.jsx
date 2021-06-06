import React, { Component } from 'react'
import './index.css'
export default class Crumb extends Component {
    render() {
        const {simunav}=this.props
        return (
            <div className="crumbmainbox">
                <div className="crumbfloatleftbox">
                    <div className="crumbtitle">当前位置：</div>
                    <div className="crumbword">学院概况</div>
                    <div className="luji"></div>
                    <div className="crumbword">
                        {/* 连接未添加 a标签样式去除未处理 */}
                        { simunav ===0 ? ("学院简介"):("学院理事")}
                        
                    </div>
                </div>
                
            </div>
        )
    }
}
