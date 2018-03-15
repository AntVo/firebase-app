import React, { Component } from 'react';
import { firebaseApp } from './firebase';

export default class SignUp extends Component {
	constructor(props){
	    	super(props)
	    	this.state = {
	    		error: null
	    	};
	 }

	signUp(event){
		event.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
		firebaseApp.auth().createUserWithEmailAndPassword(email, password)
			.catch(error => { console.log(error) });

    const user = firebaseApp.auth().currentUser;
    firebaseApp.firestore().collection("users").add({
       name: user.displayName,
       email: user.email,
       uid: user.uid,

    })
	}

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.signUp.bind(this)}>
        	<input type="text" placeholder="email" ref="email"></input>
        	<input type="text" placeholder="password" ref="password"></input>
        	<button>submit</button>
        </form>

      </div>
    );
  }
}

