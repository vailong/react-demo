import { get } from '../get.js'

export function getAdData(){
    const result = get('http://localhost:8000/api/homead');
    // const result = get('./api/homead);//配置webpack.devserver代理
    return result;
}

export function getListData(cityName, page) {
    const result = get(`http://localhost:8000/api/homelist?cityName=${cityName}&page=${page}`);
    return result
}