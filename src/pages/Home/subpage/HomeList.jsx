import React from 'react'
import { getListData } from '../../../fetch/home'
import List from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

class HomeList extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        };
    }
    render(){
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ? <List data={this.state.data}/>
                    : <div>暂无数据...</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        )    
    }
    
    //到服务器获取首页数据,公用获取数据辅助函数
    getData(page){        
        this.setState({isLoadingMore:true});
        getListData(this.props.cityName,page)
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                data:this.state.data.concat(json.data),
                hasMore:json.hasMore,
                isLoadingMore:false,
                page:page
            })
        })
        .catch(ex=>console.error('首页加载列表信息有误:'+ex.message))
    }
    componentDidMount(){
       this.getData(1)
    }
    //加载更多数据
    loadMoreData(){
        this.getData(this.state.page+1)
    }
}

export default HomeList