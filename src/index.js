import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './sign-in';
import SignUp from './sign-up';
import Navigation from './navigation';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { firebase } from 'firebase';

import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css'

ReactDOM.render(
	<Router path="/">
		<div>
			<Navigation />
				<Switch>
					<Route path="/app" component={App} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
				</Switch>
		</div>
	</Router>
	, document.getElementById('root'));

registerServiceWorker();
