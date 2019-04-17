import React from 'react'

export default ({ hasBg = false }) => {
	const sendForm = () => {
		// e.preventDefault()
	}

	return (
		<div className={hasBg ? "footer has-bg" : "footer"}>
			<div className="row">
				<div className="col s12 m6">
					<div className="row">
						<div className="col s12">
							<h4 className="has-after">QUICK LINKS</h4>
						</div>
						<div className="col s6">
							<p>About Us</p>
							<p>Skill Hub</p>
							<p>Trending Courses</p>
							<p>Community</p>
							<p>Become a Partner</p>
							<p>Hire A Skill</p>
							<p>Outsource a Job</p>
						</div>
						<div className="col s6">
							<p>Become a Mentor</p>
							<p>Portfolios</p>
							<p>Become a Tutor</p>
							<p>News & Events</p>
							<p>Blog</p>
							<p>New Members</p>
						</div>
					</div>
				</div>
				<div className="col s12 m6">
					<h4>Contact Us</h4>
					<div className="row">
						<div className="col s10">
							<form className="row" onSubmit={sendForm()}>
								<input placeholder="Email" className="browser-default" type="email" required />
								<textarea placeholder="Message" className="materialize-textarea browser-default" required></textarea>
								<button type="submit" className="btn z-depth-0">Send Message</button>
							</form>
						</div>
						<div className="col s2 social-cover">
							<a href="/#!" className="social">
								{/* <i className="material-icons">facebook</i> */}
							</a>
							{/* <br/> */}
							<a href="/#!" className="social">
								{/* <i className="material-icons">twitter</i> */}
							</a>
							{/* <br/> */}
							<a href="/#!" className="social">
								{/* <i className="material-icons">instagram</i> */}
							</a>
						</div>
					</div>
				</div>
				<div className="col s12 bum center">
					<span>&copy; {new Date().getFullYear()} Upskills.</span>
					<a href="/#!">Legal & Privacy</a>
					<a href="/#!">Regulatory</a>
					<a href="/#!">Information</a>
					<a href="/#!">Site Map</a>
				</div>
			</div>
		</div>
	)
}
