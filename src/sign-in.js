import React, { Component } from 'react';
import { firebaseApp } from './firebase';
import { Redirect } from 'react-router-dom'

export default class SignIn extends Component {
	
	SignIn(event){
		event.preventDefault();
		firebaseApp.auth().signInWithEmailAndPassword(this.refs.email.value, this.refs.password.value).catch(function(error) {
			console.log(error.code);
			console.log(error.message);
		})
	}

	render() {
		return (
		  <div className="Sign In" >
		  	<h2>Sign In</h2>
		  	<form onSubmit={this.SignIn.bind(this)} >
		  		<input type="text" ref="email"></input>
		  		<input type ="password" ref="password"></input>
		  		<button>Log In</button>
		  	</form>
		  </div>
		);
	}

}

