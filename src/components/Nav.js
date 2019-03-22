import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import M from 'materialize-css'

export default class Nav extends Component {
	componentDidMount(){
		const sideNav = document.querySelectorAll('.sidenav')
		const options = {}

		M.Sidenav.init(sideNav, options)
	}

	render(){
		return (
			<div className="navbar-fixed">
				<nav className="white shadowed">
					<div className="nav-wrapper">
						<Link to="/" id="logo-container" className="brand-logo">Logo</Link>
						<a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
						<ul className="right hide-on-med-and-down">
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/signup">Signup</Link>
							</li>
						</ul>
						<ul id="nav-mobile" className="sidenav">
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/signup">Signup</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
