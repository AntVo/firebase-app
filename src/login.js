import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {

	render() {


		const responseGoogle = (response) => {
			console.log(response);
		}
		const responseFacebook = (response) => {
			console.log(response);
		}
		const componentClicked = (response) => {
			console.log(response);
		}

		return (
			<div>
      	 <h1> LOGIN </h1>
				  <FacebookLogin
				    appId="222666694964943"
				    autoLoad={true}
				    fields="name,email,picture"
				    onClick={componentClicked}
				    callback={responseFacebook}
				  />
				  <a href="/signup" className="button is-success">Signup</a>
			 </div>
		);
	}
}
