import React, { Component } from 'react'

import TopAds from '../../../components/TopAds'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

import 'materialize-css/dist/css/materialize.min.css'
import '../../../assets/css/style.min.css'

export default class Explore extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render(){
		return (
			<div className="explore">
				<TopAds />
				<div className="header">
					<Nav active="explore" />
					<div className="header-content">
						<div className="overlay">
							<h2 className="white-text">Start Exploring</h2>
							<div className="input">
								<input type="search" className="left"/>
								<i className="material-icons right">search</i> 
							</div>
						</div>
					</div>
				</div>
				<div className="explore-container">
					<div className="row">
						<div className="col m6 s12">
							<div className="content">
								<div className="img"/>
								<div className="text">
									<div>
										<h5>Find out what's trending</h5>
										<p>Upskill Nigeria is building a community for young professionals to learn skills in diverse fields with the best training resources.</p>
									</div>
									<button className="btn z-depth-3">Follow Trends Today</button>
								</div>
							</div>
						</div>
						<div className="col m6 s12">
							<div className="content">
								<div className="img" />
								<div className="text">
									<div>
										<h5>Find out what's trending</h5>
										<p>Upskill Nigeria is building a community for young professionals to learn skills in diverse fields with the best training resources.</p>
									</div>
									<button className="btn z-depth-3">Follow Trends Today</button>
								</div>
							</div>
						</div>
						<div className="col m6 s12">
							<div className="content">
								<div className="img" />
								<div className="text">
									<div>
										<h5>Find out what's trending</h5>
										<p>Upskill Nigeria is building a community for young professionals to learn skills in diverse fields with the best training resources.</p>
									</div>
									<button className="btn z-depth-3">Follow Trends Today</button>
								</div>
							</div>
						</div>
						<div className="col m6 s12">
							<div className="content">
								<div className="img" />
								<div className="text">
									<div>
										<h5>Find out what's trending</h5>
										<p>Upskill Nigeria is building a community for young professionals to learn skills in diverse fields with the best training resources.</p>
									</div>
									<button className="btn z-depth-3">Follow Trends Today</button>
								</div>
							</div>
						</div>
						<div className="col m6 s12">
							<div className="content">
								<div className="img"/>
								<div className="text">
									<div>
										<h5>Find out what's trending</h5>
										<p>Upskill Nigeria is building a community for young professionals to learn skills in diverse fields with the best training resources.</p>
									</div>
									<button className="btn z-depth-3">Follow Trends Today</button>
								</div>
							</div>
						</div>
						<div className="col m6 s12">
							<div className="content">
								<div className="img" />
								<div className="text">
									<div>
										<h5>Find out what's trending</h5>
										<p>Upskill Nigeria is building a community for young professionals to learn skills in diverse fields with the best training resources.</p>
									</div>
									<button className="btn z-depth-3">Follow Trends Today</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}
