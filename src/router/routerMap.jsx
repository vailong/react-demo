import React from 'react'
import { Router,Route,IndexRoute,hashHistory } from 'react-router'
import App from '../pages/index.jsx'
import Home from '../pages/Home/index.jsx'
import City from '../pages/City'
import Search from '../pages/Search'

class RouteMap extends React.Component{
    render(){
        //一个路由只能有一个Router,公用模版<App></App>
        //http://..../search/美食   路由可以传参数:category键提取美食
        return (
             <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={ Home } />
                    <Route path='/city' component={ City } />
                    <Route path='/search/:category(/:keyWords)' component={ Search } />
                </Route>            
            </Router>
        )  
    }
}

export default RouteMap