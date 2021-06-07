import React, { Component } from 'react'
import './index.css'
export default class Experimental extends Component {
    render() {
        return (
            <div>
                <div className="exmaintopbox">
                    <div className="extopword">欢迎来到数字经济实验教学中心</div>
                </div>
                <div className="exmainnavbox">
                    {/* <div className="exnavlogo">
                        <img src="./img/logo.png" alt=""/>
                    </div> */}
                    <div className="extotailnavbox">
                        <div className="exnavbox">
                            <div id="menu">
                                <div className="exoncho">
                                    <div className="exmenuword">首页</div>
                                    <div className="exlebel">INDEX</div>
                                </div>
                            </div>
                        </div>
                        <div className="exnavbox">
                            <div id="menu">
                                <div className="exoncho">
                                    <div className="exmenuword">首页</div>
                                    <div className="exlebel">INDEX</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
