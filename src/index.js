import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Main from './page/main.js';

const routes = (
    <HashRouter>
            <Switch>
                <Route exact = {true} path = "/main"  component = {Main} />
                <Route exact = {true} path="/main/:any" component={Main} />
            </Switch>
    </HashRouter>
)

ReactDOM.render(routes, document.getElementById('root'));