//userinfo子reducer
import * as actionTypes from '../constants/userinfo.js'

export default function userinfo(state={},action){
    switch(action.type){
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }    
}