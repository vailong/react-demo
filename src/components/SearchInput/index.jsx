//搜索信息的input文本框公共组件
import React from 'react'
import { hashHistory } from 'react-router'
import './style.less'

class SearchInput extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            value:''
        }
    }
    render(){
        return (
            <input type="text" className="search-input" placeholder="请输入关键字"
            onChange={this.ChangeHandle.bind(this)}
            onKeyUp={this.KeyUpHandle.bind(this)}
            value={this.state.value}/>
        )
    }
    componentDidMount(){
        this.setState({
           value:this.props.value||''
        })
    }
    ChangeHandle(e){
        //监控变化
       this.setState({value:e.target.value})
    }
    KeyUpHandle(e){
        //监控enter事件        
        if(e.keyCode !== 13)
            return;
        hashHistory.push(`/search/all/${this.state.value}`)   
    }
}

export default SearchInput