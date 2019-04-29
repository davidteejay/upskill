import React, { Component } from 'react'

import Loading from '../../../components/Preloader'
import TopAds from '../../../components/TopAds'

import 'materialize-css/dist/css/materialize.min.css'
import '../../../assets/css/style.min.css'

export default class Signup extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	handleInput(key, e) {
		// console.log(e.target.value)

		this.props.getInput({
			key,
			value: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()

		this.props.signUp()
	}

	render() {
		return (
			<div className="signin">
				<TopAds />
				<div className="signin-container">
					<div className="overlay">
						<div className="logo-container">
							<h3>Logo</h3>
						</div>
						<form onSubmit={this.handleSubmit.bind(this)} className="signin-form center">
							<h5 className="center white-text">Sign Up</h5>
							<div className="row">
								<div className="col s6 input-field">
									<input onChange={this.handleInput.bind(this, 'firstName')} value={this.props.firstName} type="text" required placeholder="First Name" />
								</div>
								<div className="col s6 input-field">
									<input onChange={this.handleInput.bind(this, 'lastName')} value={this.props.lastName} type="text" required placeholder="Last Name" />
								</div>
								<div className="col s12 input-field">
									<input onChange={this.handleInput.bind(this, 'email')} value={this.props.email} type="email" required placeholder="Email" />
								</div>
								<div className="col s6 input-field">
									<input onChange={this.handleInput.bind(this, 'password')} value={this.props.password} type="password" required placeholder="Password" />
								</div>
								<div className="col s6 input-field">
									<input onChange={this.handleInput.bind(this, 'repassword')} value={this.props.repassword} type="password" required placeholder="Confirm Password" />
								</div>
								<div className="col s12 input-field center">
									<div className="btn-cover">
										<button type="submit" className="btn">Register</button>
									</div>
									<p className="white-text center">or</p>
									<div className="btn-cover">
										<button type="button" className="btn social-btn">Continue with</button><br />
										<button type="button" className="btn social-btn">Continue with</button>
									</div>
									<p className="register white-text center">Already have an account? <a href="/signin">Sign In</a></p>
								</div>
							</div>
						</form>
						<p>&copy; 2019 UpSkill.</p>
					</div>
				</div>
				<Loading loading={this.props.signupLoading} />
			</div>
		)
	}
}
