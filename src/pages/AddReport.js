import React, { Component } from 'react'
import axios from 'axios'
import M from 'materialize-css'

import Nav from '../components/Nav'
import Preloader from '../components/Preloader'
import { API_URL } from '../config/constants'

export default class AddReport extends Component {
	constructor(props){
		super(props)

		this.addReport = this.addReport.bind(this)
		this.handleAnonymous = this.handleAnonymous.bind(this)

		this.state = {
			loading: false,
			title: '',
			description: '',
			anonymous: false,
			sector: '',
			sectors: ['Education', 'Power']
		}
	}

	handleInput(key, e){
		this.setState({ [key]: e.target.value })
	}

	addReport(e){
		e.preventDefault()
		this.setState({ loading: true })

		axios
			.post(`${API_URL}/reports/add`, {
				title: this.state.title,
				description: this.state.description,
				anonymous: this.state.anonymous,
				sector: this.state.sector,
				user: JSON.parse(sessionStorage.userData).slug
			})
			.then(res => {
				res = res.data

				if (res.error){
					console.error(res.message)
					M.toast({ html: '<span>Something went wrong</span>' })
				} else {
					M.toast({ html: '<span>Report posted successfully</span>' })
					setTimeout(() => this.props.history.push('/reports'), 3000)
				}
			})
			.catch(err => {
				console.error(err)
				M.toast({ html: '<span>Something went wrong</span>' })
			})
			.finally(() => this.setState({ loading: false }))
	}

	handleAnonymous(){
		this.setState({ anonymous: !this.state.anonymous })
	}

	render(){
		return (
			<div className="wrapper add-report">
				<Nav/>
				<div className="valign-wrapper">
					<form className="valign add-report-form shadowed" onSubmit={this.addReport}>
						<h4>Post New Report</h4>
						<div className="row">
							<div className="input-container col s12">
								<label htmlFor="title">Title</label>
								<input type="text" id="title" required value={this.state.title} onChange={this.handleInput.bind(this, 'title')} placeholder="The title of your report"/>
							</div>
							<div className="input-container col s12">
								<label htmlFor="sector">Sector</label>
								<select className="browser-default" id="sector" value={this.state.sector} required onChange={this.handleInput.bind(this, 'sector')}>
									<option disabled value="">Select a sector</option>
									{this.state.sectors.map((sector, i) => {
										return <option key={i} value={sector}>{sector}</option>
									})}
								</select>
							</div>
							<div className="input-container col s12">
								<label htmlFor="description">Description</label>
								<textarea className="browser-default" id="description" value={this.state.description} onChange={this.handleInput.bind(this, 'description')} required placeholder="A detailed description of your report. Be sure to add hashtags!"></textarea>
							</div>
							<div className="input-container col s12">
								<p>
									<label>
										<input type="checkbox" checked={this.state.anonymous} onChange={this.handleAnonymous} className="filled-in" />
										<span>Post as anonymous</span>
									</label>
								</p>
							</div>
							<div className="input-container col s12">
								<button type="submit" className="btn z-depth-0">SUBMIT</button>
							</div>
						</div>
					</form>
				</div>
				<Preloader loading={this.state.loading}/>
			</div>
		)
	}
}
