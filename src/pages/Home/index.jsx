//总领所有HOME页中的内容
//1.拿到页面中所有和redux相关的数据
// 2.使用render整合页面所有组件和子页
import React from 'react'
import { connect } from 'react-redux'
import HomeHead from '../../components/HomeHead'
import HomeCategory from '../../components/HomeCategory'
import HomeAd from './subpage/HomeAd.jsx'
import HomeList from './subpage/HomeList.jsx'
class Home extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div>
                <HomeHead cityName={this.props.userinfo.cityName} />
                <HomeCategory />
                <div style={{height:'15px'}}>{/*分割线*/}</div>
                <HomeAd cityName={this.props.userinfo.cityName} />
                <HomeList cityName={this.props.userinfo.cityName} />
            </div>
        )
    }
}

//----------react-redux绑定----------
function mapStateToProps(state){
    return {userinfo:state.userinfo}
}
function mapDispatchToProps(dispatch){
    return{}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)