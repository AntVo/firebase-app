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
	// componentWillMount(){
	//   this.authListener = this.authListener.bind(this);
	//   this.authListener();
	// }

	// authListener(){
	//   firebaseApp.auth().onAuthStateChanged((user) => {
	//     if (user){
	//       console.log(user);
	//       this.setState({ willRedirect: true });
	//       console.log('redirecting');
	//     } else {
	//       console.log("signed out");
	//       // User is Signed Out.
	//     }
 // 	 })
	// }

	//			if (this.state.willRedirect === true){
			// 	return (
			// 		<Redirect to="/homepage" />
			// 	)
			// }
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

