import React, { Component } from 'react'
import top1 from './img/top1.png'
import top2 from './img/top2.png'
import top3 from './img/top3.png'
import top4 from './img/top4.png'
import './index.css'
export default class Topheader extends Component {
    state={
        serchKey:""
    }
    handleKeyUp=(event)=>{
        const{keyCode,target}=event
        this.setState({serchKey:target.value})
        if (keyCode !==13 ) return 
        if (target.value.trim() === ''){
            alert("输入不能为空")
            return
        }
        window.open("https://search.hznu.edu.cn/zcms/search/result?SiteID=295&Query="+target.value, "_blank");
    }
    render() {
        return (
            <div id="header">
               <nav className="navbar navbar-light bg-light justify-content-end alcol" >
                <a className="navbar-brand picc" href="http://www.hznu.edu.cn/">
                    <img className="pi" src={top1 } alt="学校主页"/>
                    学校主页
                </a>
                <a className="navbar-brand picc" href="http://abs.hznu.edu.cn/office">
                    <img className="pi" src={top2 } alt="学院办公网"/>
                    学院办公网
                </a>
                <a className="navbar-brand picc" href="http://abs.hznu.edu.cn/portal/rczp">
                    <img className="pi" src={top3 } alt="人才招聘"/>
                    人才招聘
                </a>
                <a className="navbar-brand picc" href="https://authserver.hznu.edu.cn/authserver/login?service=https%3A%2F%2Fsearch.hznu.edu.cn%2Fzcms%2Fhznumember%2Fredirect%3Fgoto%3Dhttp%253A%252F%252Fabs.hznu.edu.cn%2Fportal%252F%26timestamp%3D1585727060547">
                    <img className="pi" src={top4 } alt="登录"/>
                    登录
                </a>
                <div className="form-inline picc" onKeyUp={this.handleKeyUp}>
                    {/* 使用div而非from防止boostrap自动提交 */}
                    <input className="form-control mr-sm-2 serpi"  type="search" placeholder="回车进行搜索" aria-label="Search"/>
                </div>
                {/* 弹出搜索框太难做了 算了 */}
                {/* placeholder 字体颜色要做不同浏览器适配 太麻烦了 算了 */}
                </nav>
            </div>
        )
    }
}
