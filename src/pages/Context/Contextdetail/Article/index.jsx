import React, { Component } from 'react'
import './index.css'
export default class Article extends Component {
    state={
        content:[],
    }
    getthat = async ()=>{
        try{
            const response = await fetch(`/public/word.json`)
            console.log(response)
            // const data = await response.json()
            // console.log(data)
           } catch (error){
               console.log(error)
           }
    }
    render() {
        this.getthat()
        return (
            <>
            <div className="articletitlebox">
                {/* error 无法复现下划线 */}
                <div className="articlewordbox">学院简介</div>
            </div>
            <div className="articleauthor">
            作者：lrs :)  发布时间：2021-06-04  点击：666
            </div>
            <br />
            <div className="articlecontent">
                <div>
                    
                </div>
            </div>
            <br />
            <div className="articlecontent">
                <div>
                阿里巴巴商学院以在互联网新经济领域的人才培养、研究、社会服务和创新创业教育为特色，特别是在信息经济、智能商业、电子商务服务、大数据分析、社交网络、网络营销等方向上优势明显。
                </div>
            </div>
            </>
        )
    }
}
