import React from 'react'
import SearchInput from '../SearchInput/index.jsx'
import { hashHistory } from 'react-router'

import './style.less'
class SearchHead extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){      
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value={this.props.value} />
                </div>
            </div>
        )
    }
    clickHandle(){
        //改路由
        window.history.back()
    }
}

export default SearchHead