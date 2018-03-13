import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {


	renderNav(){
		if (this.props.loggedIn){
			return (<nav className="navbar is-primary" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<div className="navbar-item nav-brand">
						Firebase App
					</div>
				</div>

				<div className="navbar-menu">
					<div className="navbar-end">
						<div class="navbar-item">
								<NavLink exact className="nav-link"activeClassName='active' to="/">
									Home
								</NavLink>
						</div>
						<div class="navbar-item">
							<button onClick={this.props.signout.bind(this)} >Sign Out</button>
						</div>
					</div>
				</div>

			</nav>
		)} 

		else {
			return (
			<nav className="navbar is-primary" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<div className="navbar-item nav-brand">
						Firebase App
					</div>
				</div>

				<div className="navbar-menu">
					<div className="navbar-end">
						<div class="navbar-item">
								<NavLink exact className="nav-link"activeClassName='active' to="/">
									Home
								</NavLink>
						</div>
						<div class="navbar-item">
							<NavLink className="nav-link" activeClassName='active' to="/signin">
								  Login
							</NavLink>
						</div>
					</div>
				</div>

			</nav>
		)}

	}

	render(){
		return (
		  <div>
      		{this.renderNav()}
      </div>
	)}


}

