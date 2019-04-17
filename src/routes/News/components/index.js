import React, { Component } from 'react'

import Loading from '../../../components/Preloader'
import TopAds from '../../../components/TopAds'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

import 'materialize-css/dist/css/materialize.min.css'
import '../../../assets/css/style.min.css'

export default class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			news: [
				{
					title: 'Lorem Ipsum',
					body: 'Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem m',
					author: 'James Dike',
					date: 'April 19, 2019'
				},
				{
					title: 'Lorem Ipsum',
					body: 'Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem m',
					author: 'James Dike',
					date: 'April 19, 2019'
				},
				{
					title: 'Lorem Ipsum',
					body: 'Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem m',
					author: 'James Dike',
					date: 'April 19, 2019'
				},
				{
					title: 'Lorem Ipsum',
					body: 'Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem m',
					author: 'James Dike',
					date: 'April 19, 2019'
				},
				{
					title: 'Lorem Ipsum',
					body: 'Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem m',
					author: 'James Dike',
					date: 'April 19, 2019'
				},
				{
					title: 'Lorem Ipsum',
					body: 'Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem m',
					author: 'James Dike',
					date: 'April 19, 2019'
				},
				{
					title: 'Lorem Ipsum',
					body: 'Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem m',
					author: 'James Dike',
					date: 'April 19, 2019'
				},
				{
					title: 'Lorem Ipsum',
					body: 'Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem m',
					author: 'James Dike',
					date: 'April 19, 2019'
				},
				{
					title: 'Lorem Ipsum',
					body: 'Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem m',
					author: 'James Dike',
					date: 'April 19, 2019'
				},
				{
					title: 'Lorem Ipsum',
					body: 'Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem m',
					author: 'James Dike',
					date: 'April 19, 2019'
				},
			]
		}
	}

	async componentWillMount() {
		setTimeout(() => this.setState({ loading: false }), 1000)
	}

	render() {
		
		return (
			<div className="news">
				<TopAds />
				<Nav active="news" />
				<div className="news-container">
					<div className="latest">
						<h3>Latest</h3>
						<div className="row">
							<div className="col s12 m7">
								<div className="img"/>
							</div>
							<div className="col s12 m5">
								<h4><a href="/#!">Lorem Ipsum</a></h4>
								<p>Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem Lorem Ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem m</p>
								<div className="author">
									<div className="avatar-img left"/>
									<p className="left">
										<b>James Dike</b><br/>
										<span>April 21, 2019</span>
									</p>
									<div className="clearfix"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="others row">
						{this.state.news.map((item, i) => {
							return (
								<div className="col m6 s12" key={i}>
									<div className="img"></div>
									<h5>{item.title}</h5>
									<p>{item.body}</p>
									<div className="author">
										<div className="avatar-img left" />
										<p className="left">
											<b>{item.author}</b><br />
											<span>{item.date}</span>
										</p>
										<div className="clearfix"></div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<Footer hasBg />
				<Loading loading={this.state.loading} />
			</div>
		);
	}
}
