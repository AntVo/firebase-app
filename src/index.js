import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './sign-in';
import SignUp from './sign-up';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { firebase } from 'firebase';

import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css'

ReactDOM.render(
	<Router path="/">
		<Switch>
			<Route path="/app" component={App} />
			<Route path="/signin" component={SignIn} />
			<Route path="/signup" component={SignUp} />
		</Switch>
	</Router>
	, document.getElementById('root'));

registerServiceWorker();
