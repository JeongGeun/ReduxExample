import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import reducers from './reducers'
import {Provider} from 'react-redux';
const store =createStore(reducers);
// store가 하는 일
// dispatch(action) : 
// getState() : 현재 상태 반환
// subscribe() : 
// replaceReducer():


ReactDom.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
);