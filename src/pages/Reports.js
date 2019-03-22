import React, { Component } from 'react'
import M from 'materialize-css'
import axios from 'axios'

import Nav from '../components/Nav'
import Preloader from '../components/Preloader'
import { API_URL } from '../config/constants'

export default class Reports extends Component {
	constructor(props){
		super(props)

		this.getReports = this.getReports.bind(this)

		this.state = {
			reports: [],
			loading: true
		}
	}

	getReports(){
		axios
			.get(`${API_URL}/reports`)
			.then(res => {
				res = res.data

				if (res.error){
					console.log(res.message)
					M.toast({ html: '<span>Something went wrong</span>' })
				} else this.setState({ reports: res.data })
			})
			.catch(err => {
				console.error(err)
				M.toast({ html: '<span>Something went wrong</span>' })
			})
			.finally(() => this.setState({ loading: false }))
	}

	componentDidMount(){
		this.getReports()
	}

	render(){
		return (
			<div className="wrapper reports">
				<Nav/>
				<Preloader loading={this.state.loading} backgroundColor="#fff" />
			</div>
		)
	}
}
