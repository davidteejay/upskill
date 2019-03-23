import React, { Component } from 'react'
import M from 'materialize-css'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Nav from '../components/Nav'
import Preloader from '../components/Preloader'
import Report from '../components/Report'
import Aside from '../components/Aside'
import { API_URL } from '../config/constants'

export default class Reports extends Component {
	constructor(props){
		super(props)

		this.getReports = this.getReports.bind(this)

		this.state = {
			reports: [],
			displayed: [],
			loading: true,
			search: '',
			filterCategory: '',
			sectors: ['Education', 'Security', 'Health', 'Agriculture', 'Infrasctructure', 'Power', 'Banking and Finance', 'Legal Issues', 'Telecommunication', 'Transportation']
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
				} else {
					const { tag } = this.props.match.params
					let reports = []
					
					if (tag) reports = res.data.filter(report => {
						return report.tags.includes('#' + tag)
					}) 
					else reports = res.data

					this.setState({ reports })
					this.setState({ displayed: reports.sort((a, b) => {
						return new Date(b.createdAt) - new Date(a.createdAt)
					})})
				}
			})
			.catch(err => {
				console.error(err)
				M.toast({ html: '<span>Something went wrong</span>' })
			})
			.finally(() => this.setState({ loading: false }))
	}

	handleSearch(e){
		const search = e.target.value.toLowerCase()

		const displayed = this.state.reports.filter(report => {
			const { title, description } = report
			return title.toLowerCase().includes(search) || description.toLowerCase().includes(search)
		})

		this.setState({ search, displayed })
	}

	handleFilter(e){
		const filterCategory = e.target.value

		const displayed = this.state.reports.filter(report => {
			return report.sector === filterCategory
		})

		this.setState({ filterCategory, displayed })
	}

	clearFilter(){
		this.setState({
			displayed: this.state.reports,
			filterCategory: '',
			search: ''
		})
	}

	componentDidMount(){
		this.getReports()

		if (!sessionStorage.userData) this.props.history.push('/login')
	}

	render(){
		return (
			<div className="wrapper">
				<Nav {...this.props}/>
				<div className="reports row">
					<div className="col s12 m8">
						{this.props.match.params.tag && <div className="back">
							<Link to='/reports'>
								&larr; GO BACK
							</Link>
						</div>}
						<div className="search">
							<input type="search" id="search" value={this.state.search} onChange={this.handleSearch.bind(this)} placeholder="Input search term here"/>
							<div className="filter">
								Filter by Sector:<br/>
								<select	value={this.state.filterCategory} className="browser-default" onChange={this.handleFilter.bind(this)}>
									<option disabled value="">Select a sector</option>
									{this.state.sectors.map((sector, i) => {
										return <option key={i} value={sector}>{sector}</option>
									})}
								</select>
							</div>
							<div className="clear">
								<button className="btn z-depth-0" onClick={this.clearFilter.bind(this)}>CLEAR</button>
							</div>
						</div>
						{this.state.displayed.length > 0 ? this.state.displayed.map((report, i) => {
							return <Report { ...this.props } key={i} data={report}/>
						}) : (<div className="shadowed empty">
							<h5 className="center light">{this.props.match.params.tag ? 'There are no reports under this tag yet' : 'There are no reports yet'}</h5>
						</div>)}
					</div>
					<Aside />
				</div>
				<Preloader loading={this.state.loading} backgroundColor="#fff" />
			</div>
		)
	}
}
