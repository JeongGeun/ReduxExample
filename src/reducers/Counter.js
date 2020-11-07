import * as types from '../actions/ActionTypes';

const initialState={
    number :0
};

export default function counter(state = initialState,action) {
    switch(action.type){
        case types.INCREAMENT:
            return {...state,number : state.number+1};
        case types.DECREAMENT:
            return {...state,number: state.number-1}
        default:
            return state;
    }
}