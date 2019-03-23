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
		this.getComments = this.getComments.bind(this)

		this.state = {
			report: {},
			loading: true,
			commentLoading: true,
			comments: [],
			comment: '',
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

	getComments() {
		const { slug } = this.props.match.params
		axios
			.get(`${API_URL}/comments`, {
				params: {
					report: slug
				}
			})
			.then(res => {
				res = res.data
				// console.log(res)

				if (res.error) {
					console.log(res.message)
					M.toast({ html: '<span>' + res.message + '</span>' })
				} else {
					this.setState({ comments: res.data.sort((a, b) => {
						return new Date(b.createdAt) - new Date(a.createdAt)
					})})
				}
			})
			.catch(err => {
				console.error(err)
				M.toast({ html: '<span>Could not fetch comments</span>' })
			})
			.finally(() => this.setState({ commentLoading: false }))
	}

	handlePost() {
		this.setState({ loading: true })
		const { report: { comments, slug }, comment } = this.state
		const user = JSON.parse(sessionStorage.userData).slug

		const data = { comments: comments || 0, report: slug, comment, user }

		axios
			.post(`${API_URL}/comments/add`, data)
			.then(res => {
				res = res.data

				if (res.error) M.toast({ html: `<span>${res.message}</span>` })
				else {
					M.toast({ html: '<span>Comment Added Successfully</span>' })

					this.setState({ comment: '' })
					this.getComments()
				}
			})
			.catch(err => console.log(err))
			.finally(() => this.setState({ loading: false }))
	}

	handleComment(e) {
		const comment = e.target.value

		this.setState({ comment })
	}

	handleBackup() {
		this.setState({ loading: true })
		const { data } = this.state,
			ngo = JSON.parse(sessionStorage.userData)

		const backup = {
			ngo,
			user: data.userData,
			report: data
		}

		axios
			.post(`${API_URL}/reports/take`, backup)
			.then(res => {
				// console.log(res.data)
				if (res.error) M.toast({ html: `<span>${res.message}</span>` })
				else {
					M.toast({ html: '<span>You have successfully backed up this report. Pleaase check your mail for further instrcutions</span>' })

					let { data } = this.state
					data.status = 'in-progress'
					this.setState({ data })
				}
			})
			.catch(err => console.log(err))
			.finally(() => this.setState({ loading: false }))
	}

	componentDidMount() {
		this.getReport()
		this.getComments()

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
							<div className="report-container">
								<div className="title">
									<h4>{data.title}</h4>
									<h6>{data.status && data.status.replace('-', ' ')}</h6>
								</div>
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
							<div className="report-footer">
								{/* <div className="share">
									<span className="material-icons"></span>
									Share Report
								</div> */}
								{JSON.parse(sessionStorage.userData).type === 'ngo' && data.status !== 'in-progress' && <div className="backup" onClick={this.handleBackup.bind(this)}>
									<span className="material-icons"></span>
									Back this Report up
								</div>}
							</div>
							<div className="comment-box">
								<textarea className="browser-default" id="comment" value={this.state.comment} onChange={this.handleComment.bind(this)} placeholder="Type your comment"></textarea>
								<div className="right-align">
									<button className="btn z-depth-0" onClick={this.handlePost.bind(this)}>Post</button>
									<div className="clearfix"></div>
								</div>
								<div className="comments report-container">
									{this.state.commentLoading ? (
										<h5 className="center light">Loading Comments...</h5>
									) : (
										this.state.comments.length < 1 ? (
											<h5 className="center light">Be the first to comment on this</h5>
										) : (
											this.state.comments.map((comment, i) => {
												return <div className="comment" key={i}>
													<h6>{comment.comment}</h6>
													<p><i>By {comment.userData.name || comment.userData.firstName + ' ' + comment.userData.lastName}</i></p>
												</div>
											})
										)
									)}
								</div>
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
