import React, { Component } from 'react'
import M from 'materialize-css'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Nav from '../components/Nav'
import Preloader from '../components/Preloader'
import Aside from '../components/Aside'
import { API_URL } from '../config/constants'

export default class Report extends Component {
	constructor(props) {
		super(props)

		this.getReport = this.getReport.bind(this)

		this.state = {
			report: [],
			loading: true,
		}
	}

	getReport() {
		const { slug } = this.props.match.params
		axios
			.get(`${API_URL}/reports/${slug}`)
			.then(res => {
				res = res.data

				if (res.error) {
					console.log(res.message)
					M.toast({ html: '<span>' + res.message + '</span>' })
				} else {
					this.setState({ report: res.data })
				}
			})
			.catch(err => {
				console.error(err)
				M.toast({ html: '<span>Something went wrong</span>' })
			})
			.finally(() => this.setState({ loading: false }))
	}

	componentDidMount() {
		this.getReport()

		if (!sessionStorage.userData) this.props.history.push('/login')
	}

	render() {
		const data = this.state.report
		
		return (
			<div className="wrapper">
				<Nav {...this.props}/>
				<div className="reports row">
					<div className="col s12 m8">
						<div className="report shadowed">
							<h4>{data.title}</h4>
							<h6>Posted by {data.anonymous ? 'Anonymous User' : data.userData && `${data.userData.firstName} ${data.userData.lastName}`} | {data.sector} Sector | {new Date(data.createdAt).toDateString()}</h6>
							<div className="tags">
								{data.tags && data.tags.map((tag, i) => {
									return <Link key={i} to={`/reports/${tag.replace('#', '')}`} className="tag">{tag}</Link>
								})}
							</div>
							<div className="description">
								<p>
									{data.description && data.description.replace(/#\S+/g, '')}
								</p>
							</div>
						</div>
					</div>
					<Aside />
				</div>
				<Preloader loading={this.state.loading} backgroundColor="#fff" />
			</div>
		)
	}
}
