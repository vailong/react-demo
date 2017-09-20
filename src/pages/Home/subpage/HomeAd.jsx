import React from 'react'
import { getAdData } from '../../../fetch/home'
import Ad from '../../../components/HomeAd'

class HomeAd extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={data:[]};
    }
    render(){
        return (
            <div>
            {
                this.state.data.length
                ?<Ad data={this.state.data} />
                :<h1>正在加载...</h1>
            }        
            </div>
        )
    }
    componentDidMount(){
        //利用fetch发送ajax请求,请求mock中的数据,得到一个promise对象
        getAdData()
        .then(res => res.json())
         // 返回之后更新stata中的data
        .then(json => this.setState({data:json}))
        .catch(ex => console.error('首页请求广告信息错误:'+ex.message))       
    }
}

export default HomeAd