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
                    <div className="exnavlogo">
                        <img src="./img/logo.png" alt=""/>
                    </div>
                    <div className="extotailnavbox">
                         <div className="exnavbox">
                             <div className="exnavitem">
                                <div >
                                    <div className="exmenuword">首页</div>
                                    <div className="exlebel exoncho">INDEX</div>
                                </div>
                            </div> 
                        </div> 
                        <div className="exnavbox">
                             <div className="exnavitem">
                                <div >
                                    <div className="exmenuword">中心概况</div>
                                    <div className="exlebel">CENTER</div>
                                </div>
                            </div> 
                        </div> 
                        <div className="exnavbox">
                             <div className="exnavitem">
                                <div >
                                    <div className="exmenuword">实验教学</div>
                                    <div className="exlebel">TEACH</div>
                                </div>
                            </div> 
                        </div> 
                        <div className="exnavbox">
                             <div className="exnavitem">
                                <div >
                                    <div className="exmenuword">教学资源</div>
                                    <div className="exlebel">RESOURCE</div>
                                </div>
                            </div> 
                        </div> 
                        <div className="exnavbox">
                             <div className="exnavitem">
                                <div>
                                    <div className="exmenuword">教学成功</div>
                                    <div className="exlebel">ACHIEVEMENT</div>
                                </div>
                            </div> 
                        </div>
                        <div className="exnavbox">
                             <div className="exnavitem">
                                <div>
                                    <div className="exmenuword">规章制度</div>
                                    <div className="exlebel">RULES</div>
                                </div>
                            </div> 
                        </div> 
                        <div className="exnavbox">
                             <div className="exnavitem">
                                <div >
                                    <div className="exmenuword">下载中心</div>
                                    <div className="exlebel">DOWNLOAD</div>
                                </div>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}
