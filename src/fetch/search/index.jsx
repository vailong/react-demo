import { get } from '../get.js'

export function getListData(condition) {
    // Object.keys(condition).map(item=>{
    //     paramStr+=`${item}=${condition[item]}$`
    // })
    var url='http://localhost:8000/api/search?',
        paramStr=''    
    for(var p in condition){
        paramStr+=p+'='+condition[p];
        paramStr+='&';
    }
    url=url+paramStr.slice(0,-1);
    return get(url);
}