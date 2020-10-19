//母版页
//一个组件：表现任务、数据任务(和redux相关的数据任务),如果是和redux相关的数据任务就要放在pages
// 文件夹中;如果没有和redux相关的数据任务就要放在components文件夹中。
import React from 'react'
import { bindActionCreators } from 'redux'//批量绑定creator
import { USERINFO_CITYNAME } from '../config/localStoreKey.js'
import { getItem } from '../util/localStore.js'
import { connect } from 'react-redux'
import * as userinfoActionsFromOtherFile from '../actions/userinfo.js'
class App extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            //默认一开始拿数据
            isFetching:true
        }
    }
    render(){
        return(
            <div>
            {
                this.state.isFetching
                ?<h1>正在加载用户城市名...</h1>
                :<div>{this.props.children}</div>
            }
        </div>
        )   
    }
    componentDidMount(){

        
        //从页面的localStorage中拿到城市名
        var cityName = getItem(USERINFO_CITYNAME);//从localStorage中拿数据
        if(cityName == null) cityName = '深圳';
        //将城市名保存到redux仓库容器中
        this.props.userinfoActions.update({cityName:cityName});
        //更新this.state.isFetching状态
        this.setState({isFetching:false});
    }
}

//----------------react-redux关联绑定---------------------
function mapStateToProps(state){
    return {}
}
function mapDispatchToProps(dispatch){
    return {
        userinfoActions:bindActionCreators(userinfoActionsFromOtherFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)