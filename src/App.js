import React, { Component } from 'react';
import { firebaseApp } from './firebase';
import SignIn from './sign-in';
import SignUp from './sign-up';
import Navigation from './navigation';
import HomePage from './homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { firebase } from 'firebase';
import './App.css';

export default class App extends Component {

  constructor(props){
        super(props)
        this.state = {
          user: null,
          loggedIn: false
      };
 }

  componentWillMount(){
    this.authListener = this.authListener.bind(this);
    this.authListener();
  }

  authListener(){
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user){
        console.log(user);
        this.setState({ user: user, loggedIn: true });
        console.log('redirecting');
      } else {
          this.setState({ user: null, loggedIn: false });
        // User is Signed Out.
      }
   })
  }



  signOut(){
    firebaseApp.auth().signOut().then(function(){
      console.log("signed out");
    }, function(error) {
      console.error('Sign out error!', error);
      return;
    });

  }

  render() {
      return (
        <Router path="/">
          <div>
            <Navigation user={this.state.user} loggedIn={this.state.loggedIn} signout={this.signOut} />
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
              </Switch>
          </div>
        </Router>
      );
    }
  }

