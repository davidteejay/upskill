import React, { Component } from 'react'

import Loading from '../../../components/Preloader'
import TopAds from '../../../components/TopAds'
import Nav from '../../../components/Nav'

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
				<TopAds/>
				<div className="header">
					<div className="header-content">
						<Nav isHome/>
					</div>
				</div>
				<div className="works">
					<h3 className="center">How it Works</h3>
					<div className="row">
						<div className="col s12 m6 l4">
							<div className="number">1</div>
							<div className="img"></div>
							<h4 className="light center">Lorem Ipsum</h4>
							<p className="center">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
						</div>
						<div className="col s12 m6 l4">
							<div className="number">2</div>
							<div className="img"></div>
							<h4 className="light center">Lorem Ipsum</h4>
							<p className="center">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
						</div>
						<div className="col s12 m6 l4 push-m3">
							<div className="number">3</div>
							<div className="img"></div>
							<h4 className="light center">Lorem Ipsum</h4>
							<p className="center">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="row">
						<div className="col s12 m6 l4">
							<div className="number">4</div>
							<div className="img"></div>
							<h4 className="light center">Lorem Ipsum</h4>
							<p className="center">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
						</div>
						<div className="col s12 m6 l4">
							<div className="number">5</div>
							<div className="img"></div>
							<h4 className="light center">Lorem Ipsum</h4>
							<p className="center">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
						</div>
						<div className="col s12 m6 l4 push-m3">
							<div className="number">6</div>
							<div className="img"></div>
							<h4 className="light center">Lorem Ipsum</h4>
							<p className="center">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
				<div className="skills">
					<div className="row">
						<div className="col m3 s12">
							<div className="content">
								<div className="categories">
									<h5 className="center">CATEGORIES</h5>
								</div>
								<div className="advert valign-wrapper">
									<h5 className="light valign">ADVERT SPACE</h5>
								</div>
							</div>
						</div>
						<div className="col m9 s12">
							<div className="content">
								<div className="skill-inner">
									
								</div>
							</div> 
						</div>
					</div>
				</div>
				<Loading loading={this.props.homeLoading}/>
			</div>
		)
	}
}
