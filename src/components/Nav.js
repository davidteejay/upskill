import React, { Component } from 'react'
import M from 'materialize-css'

export default class Nav extends Component {
	componentDidMount(){
		const sideNav = document.querySelectorAll('.sidenav')
		const sideNavOptions = {}
		M.Sidenav.init(sideNav, sideNavOptions)

		const dropDown = document.querySelectorAll('.dropdown-trigger')
		const dropDownOptions = {
			hover: true,
			constrainWidth: false,
			coverTrigger: false
		}
		M.Dropdown.init(dropDown, dropDownOptions)

		let collapsible = document.querySelectorAll('.collapsible')
		let collapsibleOptions = {}

		M.Collapsible.init(collapsible, collapsibleOptions)
	}

	render(){
		const { active } = this.props
		return (
			<nav className="white black-text z-depth-2">
				<div className="nav-wrapper">
					<a href="/" className="logo-container">
						Logo
					</a>
					<ul className="hide-on-med-and-down main-nav">
						<li><a href="/about" className={active === 'about' ? 'active' : ''}>About</a></li>
						<li><a href="/hub" className={active === 'hub' ? 'active' : ''}>SkillHub</a></li>
						<li><a href="/explore" className={active === 'explore' ? 'active dropdown-trigger' : 'dropdown-trigger'} data-target="explore-menu">Explore<i className="material-icons right">arrow_drop_down</i></a></li>
						<li><a href="/news" className={active === 'news' ? 'active' : ''}>News & Events</a></li>
						<li><a href="/contact" className={active === 'contact' ? 'active' : ''}>Contact Us</a></li>
					</ul>
					<ul className="hide-on-med-and-down">
						<li className="right"><a href="/signup" className="signup z-depth-3">Get Started</a></li>
						<li className="right"><a href="/signin">Sign In</a></li>
					</ul>
					<a href="/#!" className="hide-on-large-only sidenav-trigger" data-target="slide-out">
						<i className="material-icons">menu</i>
					</a>
					<ul className="sidenav" id="slide-out">
						<li><a href="/" className={active === 'home' ? "active" : ""}>Home</a></li>
						<li><a href="/about" className={active === 'about' ? 'active' : ''}>About</a></li>
						<li><a href="/hub" className={active === 'hub' ? 'active' : ''}>SkillHub</a></li>
						<li className="no-padding">
							<ul className="collapsible collapsible-accordion">
								<li>
									<a className={active === 'explore' ? 'active collapsible-header' : 'collapsible-header'}>Explore<i className="material-icons right">arrow_drop_down</i></a>
									<div className="collapsible-body">
										<ul>
											<li><a href="#!">Trending Courses</a></li>
											<li><a href="#!">Hire A Skill</a></li>
											<li><a href="#!">Outsource A Job</a></li>
											<li><a href="#!">My Profile</a></li>
											<li><a href="#!">My Portfolio</a></li>
											<li><a href="#!">Join A Community</a></li>
											<li><a href="#!">Become A Partner</a></li>
											<li><a href="#!">Become A Mentor</a></li>
											<li><a href="#!">Become A Tutor</a></li>
											<li><a href="#!">Testimonials</a></li>
										</ul>
									</div>
								</li>
							</ul>
						</li>
						<li><a href="/news" className={active === 'news' ? 'active' : ''}>News & Events</a></li>
						<li><a href="/contact" className={active === 'contact' ? 'active' : ''}>Contact Us</a></li>
						<li><a href="/signup">Sign Up</a></li>
						<li><a href="/signin">Sign In</a></li>
					</ul>
					<ul className="dropdown-content" id="explore-menu">
						<li><a href="#!">Trending Courses</a></li>
						<li><a href="#!">Hire A Skill</a></li>
						<li><a href="#!">Outsource A Job</a></li>
						<li><a href="#!">My Profile</a></li>
						<li><a href="#!">My Portfolio</a></li>
						<li><a href="#!">Join A Community</a></li>
						<li><a href="#!">Become A Partner</a></li>
						<li><a href="#!">Become A Mentor</a></li>
						<li><a href="#!">Become A Tutor</a></li>
						<li><a href="#!">Testimonials</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}
