import React from 'react'
import ListItem from './item'
import './style.less'

class List extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="list-container">
                {this.props.data.map((item,index) => {
                    return <ListItem key={index} data={item} />
                })}
            </div>
        )
    }
}

export default List