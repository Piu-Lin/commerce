import React, { Component } from 'react'
import './index.css'
export default class Crumb extends Component {
    render() {
        return (
            <div className="crumbmainbox">
                <div className="crumbfloatleftbox">
                    <div className="crumbtitle">当前位置：</div>
                    <div className="crumbword">学院概况</div>
                    <div className="luji"></div>
                    <div className="crumbword">
                        {/* 连接未添加 a标签样式去除未处理 */}
                        学院简介
                    </div>
                </div>
                
            </div>
        )
    }
}
