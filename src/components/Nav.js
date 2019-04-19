import React from 'react'
import M from 'materialize-css'

export default ({ isHome = false, active = '' }) => {
	const links = [
		{ path: '/about', text: 'About Us', key: 'about' },
		{ path: '/hub', text: 'SkillHub', key: 'hub' },
		{ path: '/explore', text: 'Explore', key: 'explore' },
		{ path: '/news', text: 'News & Events', key: 'news' },
		{ path: '/contact', text: 'Contact Us', key: 'contact' },
	]

	const sideNav = document.querySelectorAll('.sidenav')
	const options = {}
	M.Sidenav.init(sideNav, options);

	return (
		<nav className={isHome ? 'white black-text z-depth-2 home-nav' : 'white black-text z-depth-2'}>
			<div className="nav-wrapper">
				<a href="/" className="logo-container">
					Logo
				</a>
				<ul className="hide-on-med-and-down main-nav">
					{links.map((link, i) => {
						return <li key={link.key}>
							<a href={link.path} className={link.key === active ? "active" : ""}>{link.text}</a>
						</li>
					})}
				</ul>
				<ul className="hide-on-med-and-down">
					<li className="right"><a href="/signup" className="signup">Sign Up</a></li>
					<li className="right"><a href="/signin">Sign In</a></li>
				</ul>
				<a href="/#!" className="hide-on-large-only sidenav-trigger" data-target="slide-out">
					<i className="material-icons">menu</i>
				</a>
				<ul className="sidenav" id="slide-out">
					<li>
						<a href="/">Home</a>
					</li>
					{links.map((link, i) => {
						return <li key={link.key}>
							<a href={link.path} className={link.key === active ? "active" : ""}>{link.text}</a>
						</li>
					})}
					<li><a href="/signup">Sign Up</a></li>
					<li><a href="/signin">Sign In</a></li>
				</ul>
			</div>
		</nav>
	)
}
