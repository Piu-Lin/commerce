import React, { Component } from 'react'
import './index.css'
export default class Asidenav extends Component {
    tobebief=()=>{
        this.props.handlenav(0)
    }
    tobelishi=()=>{
        this.props.handlenav(1)
    }
    render() {
        const {simunav}=this.props
        const{tobebief,tobelishi}=this
        return (
            <div >
                <div className="asidemainbox">
                    <div className="asidetitlebox">
                        <div className="asidetitleword">
                        学院概况
                        </div>
                    </div>
                    {
                    simunav === 1 ?
                    (<>
                    <div onClick={tobebief} className="asideitembox">
                        学院简介
                    </div>
                    <div onClick={tobelishi} className="asideitembox chiosenasise">
                        学院理事
                    </div>
                    </>)
                    :
                    (<><div onClick={tobebief} className="asideitembox chiosenasise">
                        学院简介
                    </div>
                    <div onClick={tobelishi} className="asideitembox">
                        学院理事
                    </div></>)
                    }

                    <div className="asideitembox">
                        学院领导
                    </div>
                    
                    
                    <div className="asideitembox">
                        机构设置
                    </div>
                </div>
                
            </div>
        )
    }
}
