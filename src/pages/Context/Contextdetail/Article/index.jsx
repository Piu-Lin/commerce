import React, { Component } from 'react'
import './index.css'
export default class Article extends Component {
    state={
        content:[],
    }
    async componentDidMount(){
        try{
            const response = await fetch('./word.json')
            const data = await response.json()
            this.setState({content:data.briefCollege})
           } catch (error){
               console.log(error)
           }
    }
    render() {
        const {content} =this.state
        return (
            <>
            <div className="articletitlebox">
                {/* error 无法复现下划线 */}
                <div className="articlewordbox">学院简介</div>
            </div>
            <div className="articleauthor">
            作者：lrs :)  发布时间：2021-06-04  点击：666
            </div>
            <div className="articlecontentmainbox">
            {
                content.map((paragraph,item)=>{
                    return (
                        <div className="articlecontentwordsbox" key={item}>
                        <br />
                        <div  className="articlecontentwords">
                        &emsp;{paragraph}
                        </div> 
                        </div>
                    )
                })
            }
            </div>
            </>
        )
    }
}
