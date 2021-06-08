import React, { Component } from 'react'
import './index.css'
export default class Figure extends Component {
    render() {
        return (
            <div>
                <div className="articletitlebox">
                {/* error 无法复现下划线 */}
                    <div className="articlewordbox">学院理事</div>
                </div>
                <div className="figuremainbox">
                    <div className="figureitembox">
                        <div className="portrait" id="shaoxiaofeng"/>
                        <div className="figurename">邵晓峰</div>
                        <div className="figurebriefbox">
                            <div className="figurebrieitem">阿里巴巴集团秘书长</div>
                            <div className="figurebrieitem">阿里巴巴集团首席风险官</div>
                            <div className="figurebrieitem">阿里巴巴商学院理事会理事长</div>
                        </div>
                    </div> 
                    <div className="figureitembox">
                        <div className="portrait"  id="wanglilin"/>
                        <div  className="figurename">王利琳</div>
                        <div className="figurebriefbox">
                            <div className="figurebrieitem">杭州师范大学党委副书记</div>
                            <div className="figurebrieitem">阿里巴巴商学院理事会副理事长</div>
                        </div>
                        
                    </div>  
                    <div className="figureitembox">
                        <div className="portrait" id="zengming"/>
                        <div className="figurename">曾鸣</div>
                        <div className="figurebriefbox">
                            <div className="figurebrieitem">阿里巴巴商学院院长</div>
                            <div className="figurebrieitem">原阿里巴巴集团学术委员会主席</div>
                        </div>
                    </div>  
                    <div className="figureitembox">
                        <div className="portrait" id="wangjian"/>
                        <div className="figurename">王坚</div>
                        <div className="figurebriefbox">
                            <div className="figurebrieitem">阿里巴巴集团技术委员会主席</div>
                            <div className="figurebrieitem">中国工程院院士</div>
                        </div>
                    </div>  
                    <div className="figureitembox">
                    <div className="portrait" id="xiaweidong"/>
                        <div className="figurename">夏卫东</div>
                        <div className="figurebriefbox">
                            <div className="figurebrieitem">杭州师范大学教务处处长</div>
                            <div className="figurebrieitem">杭州师范大学招生办主任</div>
                        </div>
                    </div>  
                    <div className="figureitembox">
                    <div className="portrait" id="zhangzuo"/>
                        <div className="figurename">张佐</div>
                        <div className="figurebriefbox">
                            <div className="figurebrieitem">阿里巴巴商学院理事会理事</div>
                            <div className="figurebrieitem">阿里巴巴商学院院务委员会委员</div>
                            <div className="figurebrieitem">原阿里巴巴学院党委书记</div>
                        </div>
                    </div> 
                    <div className="figureitembox">
                    <div className="portrait" id="lishiqi"/>
                        <div className="figurename">李世齐</div>
                        <div className="figurebriefbox">
                            <div className="figurebrieitem">阿里巴巴商学院学生会主席</div>
                        </div>
                    </div> 
                    <div className="figureitememptybox">
                        
                    </div> 
                    
                </div>
            </div>
        )
    }
}
