import React, { Component } from 'react'

import Nav from '../components/Nav'
import Preloader from '../components/Preloader'

export default class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: false
		}
	}
	render() {
		return (
			<div>
				<Nav />
				<Preloader loading={this.state.loading} />
			</div>
		)
	}
}
