import React, { Component } from 'react'
import M from 'materialize-css'
import { API_URL } from '../config/constants'

import Nav from '../components/Nav'
import Preloader from '../components/Preloader'
import '../assets/css/style2.css'
import axios from 'axios'

export default class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: false,
			email: "",
			password : "",
		}
		this.inputChange = this.inputChange.bind(this)
		this.passwordChange = this.passwordChange.bind(this)
		this.submitForm = this.submitForm.bind(this)
	
	}

	submitForm(e){
		e.preventDefault()
		this.setState({ loading: true })
		const { email, password } = this.state

		axios
			.post(`${API_URL}/auth/login`, {
				email,
				password
		})
		.then(res => {
			res = res.data

			if (res.error) M.toast({ html: `<span>${res.message}</span>` })
			else {
				sessionStorage.setItem('userData', JSON.stringify(res.data))
				this.props.history.push('/reports')
			}
		})
		.catch(err => console.error(err))
		.finally(() => this.setState({ loading: true }))
	}

	inputChange(e){
		this.setState({ email : e.target.value})
	}
	passwordChange(e){
		this.setState({
			password : e.target.value
		})
	}

	componentDidMount(){
		if (sessionStorage.userData) this.props.history.push('/reports')
	}

	render() {

		return (
			<div className="wrapper">
				<Nav {...this.props} />
				<Preloader loading={this.state.loading} />
				<div className="login valign-wrapper">
					<form className="valign shadowed" onSubmit={this.submitForm}>
						<h4>Login to blah</h4>
						<div className="row">
							<div className=" col s12 input-container">
								<label htmlFor="email">Email</label>
								<input id="email" type="email" onChange={this.inputChange} ></input>	
							</div>
						</div>
						<div className="row">
							<div className=" col s12 input-container">
								<label htmlFor="password">Password</label>
								<input id="password" type="password" className="validate" onChange={this.passwordChange}/>									
							</div>
							<button className="btn z-depth-0" type="submit" name="action">LOGIN</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
