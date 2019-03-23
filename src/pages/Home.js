import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from '../components/Nav'
import Preloader from '../components/Preloader'

export default class Home extends Component {
	constructor(props){
		super(props)

		this.state = {
			loading: false
		}
	}

	render(){
		return (
			<div className="wrapper">
				<Nav {...this.props} transparent/>
				<div className="home valign-wrapper">
					<div className="valign">
						<h2 className="reg center light">WELCOME TO INFORM&Eacute;</h2>
						<div class="center">
							<Link to="/login" className="btn-large bttn z-depth-0">get started</Link>
						</div>
					</div>
				</div>
				<Preloader loading={this.state.loading} />
			</div>
		)
	}
}
