import React, { Component } from 'react';
import Axios from 'axios';

import Nav from '../components/Nav'
import Preloader from '../components/Preloader'

export default class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true
		}

	
	}

	render() {

		return (
			<div>
				<Nav />
				<Preloader loading={this.state.loading} />
				<div>
					<div className="row">
						<form>
							<div className="row">
								<div className="input-field col s12">
									<input id="email" type="email" className="validate"></input>
									<label for="email">Email</label>
								</div>
							</div>

							<div className="row">
								<div className="input-field col s12">
									<input id="email" type="password" className="validate"></input>
									<label for="password">password</label>
								</div>
							</div>

							<button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
							<hr />
							<p> <a> Forgot password ? </a></p>

						</form>
					</div>
				</div>
			</div>
		)
	}
}
