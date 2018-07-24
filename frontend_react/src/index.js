import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
// import { reducer } from './ReduxPractice/reducers';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index'

ReactDOM.render(<Provider store={store} >
    <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();


// import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
// import ReactDOM from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';
// import './index.css';
// import App from './App';
// import { createStore } from 'redux';
// import { Provider } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
// import { reducer } from './ReduxPractice/reducers';
// import registerServiceWorker from './registerServiceWorker';