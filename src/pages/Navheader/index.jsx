import React, { Component } from 'react'
import "./index.css"
export default class Navheader extends Component {
    render() {
        return (
            <div className="justicenter">
                <a className="navbar-toggler" href="/#">
                    <div className="piuinco"></div>
                </a>
                <div className="navtotailbox">
                    <div className="navbox">
                        <a className="navword" href="/#">首页</a>
                    </div>
                    <div className="navbox choisen ">
                        <a className="navword" href="/#">学院概况</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="/#">学院动态</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="/#">科学研究</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="/#">学生工作</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="/#">实习就业</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="/#">党建工作</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="/#">校友风采</a>
                    </div>
                </div>
            </div>
            
        )
    }
}
