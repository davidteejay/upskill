import React, { Component } from 'react'
import axios from 'axios'

import Nav from '../components/Nav'
import Preloader from '../components/Preloader'
import { API_URL } from '../config/constants'

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
				<Nav {...this.props}/>
				<Preloader loading={this.state.loading} />
			</div>
		)
	}
}
