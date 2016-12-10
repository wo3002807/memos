import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, browserHistory, Router} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './container/App';
import AllMemosRoute from './routes/AllMemosRoute';
import TodoRoute from './routes/TodoRoute';
import DoingRoute from './routes/DoingRoute';
import DoneRoute from './routes/DoneRoute';
import configureStore from './stores';
import './main.less';
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/memos"  component={App}>
                <IndexRoute component={AllMemosRoute}/>
                <Route path="/memos/todo" component={TodoRoute}/>
                <Route path="/memos/doing" component={DoingRoute}/>
                <Route path="/memos/done" component={DoneRoute}/>
            </Route>
        </Router>
   </Provider>,
 document.body.appendChild(document.createElement('div')))
