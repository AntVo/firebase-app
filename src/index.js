import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';

import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css'

ReactDOM.render(<
	<Router path="/" history={browserHistory}>
		<Route path="/app" component={App} />
		<Route path="/signin" component={Signin} />
		<Route path="signup" component={SignUp} />
	</Router>
	, document.getElementById('root'));

registerServiceWorker();
