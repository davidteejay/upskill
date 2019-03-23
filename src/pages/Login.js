import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/constants';

import Nav from '../components/Nav'
import Preloader from '../components/Preloader'
import '../assets/css/style2.css'
import Reports from './Reports';
import Axios from 'axios';

export default class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: false,
			email: "",
			password : "",
		}
		this.inputChange = this.inputChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this)
		this.submitForm = this.submitForm.bind(this)
	
	}

	submitForm(){
		this.setState({
			loading : true,
		})
		Axios.post(`${API_URL}/auth/login`, ({
			email : this.state.email,
			password : this.state.password
		}))
		.then( res => console.log(res))
	}

	inputChange(e){
		this.setState({ email : e.target.value})
	}
	passwordChange(e){
		this.setState({
			password : e.target.value
		})
	}

	render() {

		return (
			<div>
				<Nav />
				<Preloader loading={this.state.loading} />
				<div className="form-all">
					<div className="form-card">
						<form className="valign shadowed">
							<div className="row">
								<div className=" col s12 input-container">
									<label for="email">Email</label>
									<input id="email" type="email" onChange={this.inputChange} ></input>	
								</div>
							</div>

								<br />

							<div className="row">
								<div className=" col s12 input-container">
									<label for="password">password</label>
									<input id="password" type="password" className="validate" onChange={this.passwordChange}></input>
									
								</div>
							</div>

							<br />
							<button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.submitForm}><Link to="/reports"></Link>Submit</button>

						</form>
					</div>
				</div>
			</div>
		)
	}
}
