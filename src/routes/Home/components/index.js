import React, { Component } from 'react'

import Loading from '../../../components/Preloader'

import 'materialize-css/dist/css/materialize.min.css'
import '../../../assets/css/style.min.css'

export default class Home extends Component {
	constructor(props){
		super(props)

		this.state = {}
	}

	async componentWillMount(){
		await this.props.sayHello()
	}

	render(){
		return (
			<div className="home">
				<Loading loading={this.props.homeLoading}/>
			</div>
		)
	}
}
