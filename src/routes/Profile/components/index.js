import React, { Component } from 'react'
import M from 'materialize-css'

import TopAds from '../../../components/TopAds'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

import 'materialize-css/dist/css/materialize.min.css'
import '../../../assets/css/components.min.css'
import '../../../assets/css/kc_css.css'

export default class Profile extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div className="profile">
				<TopAds/>
				<Nav active="explore"/>
				<div className="profile_header">
					<div className="kc_profile_img"></div><div className="profile_name">
						<h3>Daniel Emenike</h3><p>upskill.org/danielemenike</p>
					</div>
				</div>
				<div className="details">
					<p>
						<b>Full Details </b><br/>
						Email Address : danielemenike@email.com <br/>
						Phone Number : +2348123456789 <br/>
						Location : University of Nigeria, Nsukka <br/>
						Community : Enugu Designers <br/>
						Social Media : dannyemenyke@Instagram <br/>
						dannyemenike@Twitter <br/>
						Date Joined : 21st April, 2019 <br/>
						Date of Birth : 21st April, 2018 <br/>
						Star Level : Professional
					</p><br/>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star checked"></span>
					<span className="fa fa-star"></span>
					<span className="fa fa-star"></span><br/>
					<button className="btn z-depth-0" type="submit">Edit Profile</button><br/><br/>
					<button className="btn z-depth-0" type="submit">View my porfolio</button>
				</div>
				<Footer/>
			</div>
		)
	}
}
