//打包的入口文件,应用程序的起始文件,源代码尽量用ES6语法
//此文件要将react和redux关联(react-redux)
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import  RouteMap  from './router/routerMap.jsx' 
import initStore from './store/initStore.js'
//引入全局样式
import './static/css/common.less'
import './static/css/font.css'


const store=initStore();
render(
    <Provider store={store} >
        <RouteMap />
    </Provider>,
    document.getElementById('root')
)

