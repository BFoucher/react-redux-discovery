import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

import {TodoAppContainer} from './components/TodoApp';

const createStoreDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreDevTools(reducer);

// const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: {
        todos: [
            {id: 1, text: 'Faire du café', status: 'active', editing: false},
            {id: 2, text: 'Faire le plein du Faucon Millenium', status: 'active', editing: false},
            {id: 3, text: 'Retrouver Chubaka', status: 'active', editing: false},
        ],
        filter: 'all'
    }
});

require('../node_modules/todomvc-app-css/index.css');

ReactDOM.render(
    <Provider store={store}>
        <TodoAppContainer />
    </Provider>,
    document.getElementById('app')
);