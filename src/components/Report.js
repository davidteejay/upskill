import React, { Component } from 'react'
import M from 'materialize-css'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { API_URL } from '../config/constants'

export default class Report extends Component {
	constructor(props){
		super(props)

		this.state = {
			data: {},
			loading: false,
			commentBox: false,
			comment: ''
		}
	}

	handleComment(e){
		const comment = e.target.value

		this.setState({ comment })
	}

	handlePost(){
		this.setState({ loading: true })
		const { data: { slug, comments }, comment } = this.state
		const user = JSON.parse(sessionStorage.userData).slug

		const data = { comments: comments || 0, report: slug, comment, user }

		axios
			.post(`${API_URL}/comments/add`, data)
			.then(res => {
				res = res.data

				if (res.error) M.toast({ html: `<span>${res.message}</span>` })
				else {
					M.toast({ html: '<span>Comment Added Successfully</span>' })

					let { data } = this.state
					data.comments = data.comments + 1
					this.setState({ data, commentBox: !this.state.commentBox, comment: '' })
				}
			})
			.catch(err => console.log(err))
			.finally(() => this.setState({ loading: false }))
	}

	toggleComment(){
		const { commentBox } = this.state

		this.setState({ commentBox: !commentBox })
	}

	componentDidMount(){
		this.setState({ data: this.props.data })
	}

	render(){
		const { data } = this.state

		return (
			<div className="report single shadowed">
				{this.state.loading && <div className="loading"/>}
				<div className="report-container">
					<h4>{data.title}</h4>
					<h6>Posted by {data.anonymous ? 'Anonymous User' : data.userData && `${data.userData.firstName} ${data.userData.lastName}`} | {data.sector} Sector | {new Date(data.createdAt).toDateString()}</h6>
					<div className="tags">
						{data.tags && data.tags.map((tag, i) => {
							return <Link key={i} to={`/reports/${tag.replace('#', '')}`} className="tag">{tag}</Link>
						})}
					</div>
					<div className="description">
						<p>
							{data.description && data.description.replace(/#\S+/g, '').substring(0, 100)}...
							<Link to={`/report/${data.slug}`}>
								Read More
							</Link>
						</p>
					</div>
				</div>
				<div className="report-footer">
					<div className="view">
						<Link to={`/report/${data.slug}`}>
							View Report
						</Link>
					</div>
					<div className="comment" onClick={this.toggleComment.bind(this)}>
							<span className="material-icons"></span>
							Leave a Comment
							<span className="badge white">{data.comments}</span>
					</div>
					<div className="share">
						<span className="material-icons"></span>
						Share Report
					</div>
				</div>
				{this.state.commentBox && <div className="comment-box">
					<textarea className="browser-default" id="comment" value={this.state.comment} onChange={this.handleComment.bind(this)} placeholder="Type your comment"></textarea>
					<div className="right-align">
						<button className="btn z-depth-0" onClick={this.handlePost.bind(this)}>Post</button>
						<div className="clearfix"></div>
					</div>
				</div>}
			</div>
		)
	}
}
