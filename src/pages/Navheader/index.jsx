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
                        <a className="navword" href="http://abs.hznu.edu.cn/portal/">首页</a>
                    </div>
                    <div className="navbox choisen ">
                        <a className="navword" href="http://abs.hznu.edu.cn/c/2020-03-11/2326608.shtml">学院概况</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="http://abs.hznu.edu.cn/portal/zhlm/">学院动态</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="http://abs.hznu.edu.cn/c/2020-03-11/2326608.shtml">科学研究</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="http://abs.hznu.edu.cn/c/2020-03-11/2326608.shtml">学生工作</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="http://abs.hznu.edu.cn/c/2020-03-11/2326608.shtml">实习就业</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="http://abs.hznu.edu.cn/c/2020-03-11/2326608.shtml">党建工作</a>
                    </div>
                    <div className="navbox">
                        <a className="navword" href="http://abs.hznu.edu.cn/portal/xyfc/">校友风采</a>
                    </div>
                </div>
            </div>
            
        )
    }
}
