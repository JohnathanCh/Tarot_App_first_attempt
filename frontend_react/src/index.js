import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index'
import CardList from './components/cards/CardList'
import Card from './components/cards/Card'



ReactDOM.render(<Provider store={store} >
    <Router >
        <Route path="/" component={App} >
            <Route path="/Cards" component={CardList} >
                <Route path="Cards/:id" component={Card}></Route>
            </Route>
        </Route>
    </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
