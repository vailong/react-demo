import React from 'react'
import { connect } from 'react-redux' 

import { setItem } from '../../util/localStore.js'
import { USERINFO_CITYNAME } from '../../config/localStoreKey.js'

import { bindActionCreators } from 'redux'
import * as userinfoActionsFromOtherFile from '../../actions/userinfo.js'
import { hashHistory } from 'react-router'

import CityHead from '../../components/CityHead'
import CityCurrent from '../../components/CityCurrent'
import CityList from '../../components/CityList'

class City extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            cityNames:['北京','南昌','上海','深圳','广州','武汉','厦门','天津','杭州','重庆','南京','哈尔滨']
        };
    }
    render(){
        return (
            <div>
                <CityHead title='城市选择' />
                <CityCurrent cityName={this.props.userinfo.cityName} />
                <CityList cityNames={this.state.cityNames} changeCityFn={this.changeCityFn.bind(this)} />
            </div>
        )
    }
    //封装方法
    changeCityFn(newCity){
        //更新localstorage中的当前城市
        setItem(USERINFO_CITYNAME,newCity);
        //更新redux中的userinfo的cityName
        this.props.userinfoActions.update({cityName:newCity})
        //自动跳转到'/'主页
        hashHistory.push('/');//代码实现路由跳转
    }
}


//------------------react-redux绑定--------------
function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return {
        userinfoActions:bindActionCreators(userinfoActionsFromOtherFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)