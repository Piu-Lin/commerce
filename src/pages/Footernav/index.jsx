import React, { Component } from 'react'
import './index.css'
export default class Footernav extends Component {
    state={
        comlink:[],
    }
    async componentDidMount(){
        try{
            const response = await fetch('./comlink.json')
            const data = await response.json()
            this.setState({comlink:data.comlink})
           } catch (error){
               console.log(error)
           }
    }
    gotourl=(url)=>{
        return ()=>{
            window.open(url, "_blank");
        }
        
    }
    render() {
        const {comlink}=this.state
        const{gotourl}=this
        return (
            <>
            <div id="mainfootbox">
                <div className="footnavtitlebox">
                    <div className="footnavtitle">常用连接</div>
                </div>
                {
                    comlink.map((footnavitems,boxkey)=>{
                        return(
                            <div className="footnavitembox" key={boxkey} >
                                <div className="footnavitemcontr">
                                    {
                                        footnavitems.map((footnavitem,itemkey)=>{
                                            return(
                                                <div key={itemkey} onClick={gotourl(footnavitem.url)} className="footnavitem">
                                                    <div className="pathlogo"/>
                                                    <div className="footnavword">{footnavitem.name}</div>
                                                    {/* footnavitem.url 为链接 */}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            )
                    })
                }
            </div>
            <div id="copyright">
                <div className="copyrightword">版权所有 ©2008-2020 阿里巴巴商学院</div>
                <div className="copyrightword">浙江省杭州市余杭区余杭塘路2318号（恕园1号楼）| 公安备案号：33011002011919 浙ICP备11056902号-1</div>
            </div>
            </>
        )
    }
}
