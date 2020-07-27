import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './page/main.js';

ReactDOM.render(
    <Router basename="/platform">
        <Switch>
            <Route exact={true} path="/" component={Main} />
            <Route exact={true} path="/main" component={Main} />
            <Route exact={true} path="/main/:any" component={Main} />
        </Switch>
    </Router>, document.getElementById('root'));