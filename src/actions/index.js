import * as types from './ActionTypes'

export function increament(){
    return{
        type : types.INCREAMENT
    };
}
export function decreament(){
    return{
        type : types.DECREAMENT
    };
}
export function setColor(color){
    return{
        type : types.SET_COLOR,
        color
    };
}