import React, { Component } from 'react'
import M from 'materialize-css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Report extends Component {
	constructor(props){
		super(props)

		this.state = {
			data: [],
			loading: false
		}
	}

	componentDidMount(){
		this.setState({ data: this.props.data })
	}

	render(){
		const { data } = this.state

		return (
			<Link to={`/report/${data.slug}`} className="report shadowed">
				<h4>{data.title}</h4>
				<h6>Posted by {data.anonymous ? 'Anonymous User' : data.user && (`${data.user.split('-')[0].charAt(0).toUpperCase() + data.user.split('-')[0].slice(1)} ${data.user.split('-')[1].charAt(0).toUpperCase() + data.user.split('-')[1].slice(1)}`)} | {data.sector} Sector | {new Date(data.createdAt).toDateString()}</h6>
				<div className="tags">
					{data.tags && data.tags.map((tag, i) => {
						return <Link key={i} to={`/reports/${tag.replace('#', '')}`} className="tag">{tag}</Link>
					})}
				</div>
				<div className="description">
					<p>
						{data.description && data.description.replace(/#\S+/g, '').substring(0, 100)}...
						{/* <Link to={`/report/${data.slug}`}>
							Read More
						</Link> */}
					</p>
				</div>
			</Link>
		)
	}
}
