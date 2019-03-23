import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

export default class Nav extends Component {
	handleLogout(e){
		e.preventDefault()
		sessionStorage.clear()
		this.props.history.push('/login')
	}

	componentDidMount(){
		const sideNav = document.querySelectorAll('.sidenav')
		const options = {}

		M.Sidenav.init(sideNav, options)
	}

	render(){
		const { transparent } = this.props

		return (
			<div className="navbar-fixed" style={{ height: transparent ? 0 : 60 }}>
				<nav className={transparent ? "transparent" : "white shadowed"}>
					<div className="nav-wrapper">
						<Link to="/" id="logo-container" className="brand-logo">Inform&eacute;</Link>
						<a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
						<ul className="right hide-on-med-and-down">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/reports">Reports</Link>
							</li>
							<li>
								{sessionStorage.userData ? (JSON.parse(sessionStorage.userData).type !== 'ngo' && !window.location.hash.includes('new') && <Link className="btn z-depth-0" to="/new">Post Report</Link>) : <Link className="btn z-depth-0" to="/login">Login</Link>}
							</li>
							<li>
								{sessionStorage.userData ? <Link to="/" className="btn z-depth-0" onClick={this.handleLogout.bind(this)}>Logout</Link> : <Link className="btn z-depth-0" to="/signup">Signup</Link>}
							</li>
						</ul>
						{/* <ul id="nav-mobile" className="sidenav">
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/signup">Signup</Link>
							</li>
						</ul> */}
					</div>
				</nav>
			</div>
		)
	}
}
