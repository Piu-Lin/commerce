import React, { Component } from 'react'
import './index.css'
export default class Footernav extends Component {
    render() {
        return (
            <div id="mainfootbox">
                <div className="footnavtitlebox">
                    <div className="footnavtitle">常用连接</div>
                </div>
                <div className="footnavitembox">
                    <div className="footnavitemcontr">
                        <div className="footnavitem">
                            <div className="pathlogo"></div>
                            <div>教务处</div>
                        </div>
                        <div className="footnavitem">
                            <div className="pathlogo"></div>
                            <div>教务系统</div>
                        </div>
                        <div className="footnavitem">
                            <div className="pathlogo"></div>
                            <div>毕业论文</div>
                        </div>
                    </div>
                    
                </div>
                <div className="footnavitem2"> </div>
                <div className="footnavitem"> </div>
                <div className="footnavitem"> </div>
                <div className="footnavitem"> </div>
                <div className="footnavitem"> </div>
            </div>
        )
    }
}
