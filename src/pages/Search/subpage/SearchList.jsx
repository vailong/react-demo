import React from 'react'
import { connect } from 'react-redux'
import List from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import { getListData } from '../../../fetch/search/index.jsx'

//初始化组件state
const initialState = {
    data:[],
    hasMore:false,
    isLoadingMore:false,
    page:0
}
class SearchList extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state=initialState
    }
    render(){
        return (
            <div>
            {
                this.state.data.length
                ? <List data={this.state.data}/>
                : <div>暂无信息...</div>
            }
            {
                this.state.hasMore
                ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                : ''
            }
            </div>
        )
    }
    //公共辅助函数
    getData(page){
        this.setState({isLoadingMore:true});
        getListData({
            cityName:this.props.userinfo.cityName,
            page:page,
            category:this.props.category,
            keyWords:this.props.keyWords || ''
        })
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                data:this.state.data.concat(json.data),
                hasMore:json.hasMore,
                isLoadingMore:false,
                page:page
            })
        })
        .catch(ex=>console.error('搜索页加载列表信息有误:'+ex.message))
    }
    componentDidMount() {
        console.log('componentDidMount执行了...')
        this.getData(1)
    }
    // 加载更多数据
    loadMoreData() {
        this.getData(this.state.page+1)
    }
    componentWillReceiveProps(nextProps){
       if(this.props.keyWords!= nextProps.keyWords||
        this.props.category!=nextProps.keyWords){
            this.setState(initialState)
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.keyWords === prevProps.keyWords &&
            this.props.category === prevProps.category){
            return;
        }
        this.getData(1)
    }
}

// -------------------react redux 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)