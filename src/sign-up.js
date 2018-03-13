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
		console.log(this.refs.email.value);
		firebaseApp.auth().createUserWithEmailAndPassword(this.refs.email.value, this.refs.password.value)
			.catch(error => { console.log(error) });
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

