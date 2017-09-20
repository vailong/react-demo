//总领search页面内容
import React from 'react'
import SearchHead from '../../components/SearchHead'
import SearchList from './subpage/SearchList.jsx'

class Search extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){       
        const params = this.props.params             
        return (
            <div>
                <SearchHead value={this.props.params.keyWords} />
                <SearchList category={params.category} keyWords={params.keyWords} />
            </div>
        )
    }
}

export default Search
