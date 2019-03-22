import React, { Component } from 'react';

import axios from 'axios';
import Nav from '../components/Nav'
import Preloader from '../components/Preloader'

export default class Home extends Component {
	constructor(props){
		super(props)

		this.state = {
			loading: false
		}
	}

	onNavClick(){
		this.setState({ loading : true})
		axios.get('')
		.then(
			res => console.log(res)
		)
		.catch(
			err => err
		)
		.finally(
			this.setState({ loading : false})
		)
	}
	render(){
		return (
			<div>
				<Nav onNavClick={this.onNavClick}/>
				<Preloader loading={this.state.loading} />
			</div>
		)
	}
}
