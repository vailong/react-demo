import React from 'react'

import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                {this.props.cityNames.map((item,i) => {
                    return <li key={i}>
                        <span onClick={() => this.props.changeCityFn(item)}>{item}</span>
                    </li>
                })}
                </ul>
            </div>
        )
    }
    clickHandle(cityName) {
        const changeFn = this.props.changeFn
        changeFn(cityName)
    }
}

export default CityList