import React, { Component } from 'react';

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
	}



  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.logIn.bind(this)}>
        	<input type="text" placeholder="email" ref="email"></input>
        	<input type="text" placeholder="password" ref="password"></input>
        	<button >submit </button>
        </form>

      </div>
    );
  }
}

