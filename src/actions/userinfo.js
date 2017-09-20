import * as actionTypes from '../constants/userinfo.js'
//action creator
export function update(data){
    return {
        type:actionTypes.USERINFO_UPDATE,
        data
    }
}