import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import 'bulma/css/bulma.css'

export default class Login extends Component {
	 constructor(props){
	    super(props);
	    this.state = {
	      redirectToReferrer: false
	    };
	  }

	render() {
		const { from } = this.props.location.state || { from: {pathname: "/" } };
		const { redirectToReferrer } = this.state;

		const responseFacebook = (response) => {
			console.log(response);
			this.setState({ redirectToReferrer: true });
		}

		if (redirectToReferrer) {
			return <Reidrect to={from} />;
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
