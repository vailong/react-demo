import React from 'react'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router'
import './style.less'

class HomeCategory extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            index:0,
            category:[
                ["景点","KTV","购物","生活服务","健身运动","美发","亲子","小吃快餐","自助餐","酒吧"],
                ["美食","电影","酒店","休闲娱乐","外卖","火锅","丽人","度假出行","足疗按摩","周边游"],
                ["日本菜","SPA","结婚","学习培训","西餐","火车机票","烧烤","家装","宠物","全部分类"]
            ]
        };
    }
    render(){
        const opt={
            auto:3000,
            callback: function(index){
                this.setState({index:index});
            }.bind(this)
        }
        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                {this.state.category.map((item,i) => {
                    return (
                        <div key={i} className="carousel-item">
                            <ul className="clear-fix">
                            {item.map((text,j) => {
                                let imgObj=require(`../../static/images/category/${i+1}-${j+1}.png`);
                                return <Link to={`/search/${text}`}  key={j}>
                                    <li className="float-left">
                                        <img src={imgObj} alt={text}/>
                                        <span>{text}</span>
                                    </li>
                                </Link>
                            })}
                            </ul>
                        </div>
                    )
                })}
                </ReactSwipe>
                <div className="index-container">
                    <ul className="clear-fix">
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HomeCategory