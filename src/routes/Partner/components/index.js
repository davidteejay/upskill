import React, { Component } from 'react'

import TopAds from '../../../components/TopAds'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

import 'materialize-css/dist/css/materialize.min.css'
import '../../../assets/css/components.min.css'
import '../../../assets/css/kc_css.css'

export default class Partner extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div className="partner">
				<TopAds />
				<Nav active="explore" />
				<div className="kc_partner">
					<h5>Become a Partner</h5>
					<div className="kc_partner_write">
						<div className="kc_partner_img"> dshshd</div>
						<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua... </p>
						<button className="btn z-depth-0 btn-small" type="submit">Get Started</button> <button className="btn z-depth-0 btn-small grey" type="submit">Learn More</button>
					</div>
					<br/>
					<hr className="hr2"/><br/>
					<br/>
					<div className="kc_hire_img"><h4>Hire A Skill</h4></div>
					<div className="kc_hire_img"><h4>Outsource  A  Job</h4></div>
					<div className="kc_hire_img"><h4>Partner  Community </h4></div><br/>
					<br/>
					<div className="content center"><button className="btn z-depth-0" type="submit">Learn More</button></div><br/>
					<br/>
					<hr className="hr2"/>
					<br/>
					<br/>
					<h5>Start A Community </h5>
					<div className="kc_partner_write">
						<div className="kc_partner_img2"> dshshd</div>
						<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua... </p>
						<button className="btn z-depth-0 btn-small" type="submit">Get Started</button> <button className="btn z-depth-0 btn-small grey" type="submit">Learn More</button>
					</div>
				</div>
				<div className="kc_count">
					<br/>
						<h5>Statistics </h5>
						<table width="100%">
							<tr>
								<td >
									<p style={{ color: 'black' }}><span className="kc_count_td"> 50 + </span><br/>Communities </p>
								</td>
								<td >
									<p style={{ color: 'black' }}><span className="kc_count_td"> 100 + </span><br/>Partner </p>
								</td>
								<td >
									<p style={{ color: 'black' }}><span className="kc_count_td"> 50 +</span> <br/>Mentors </p>
								</td>
							</tr>
						</table><br/>
						<h5>Current Partners </h5>
						<br/>
						<table width="100%">
							<tr>
								<td className="kc_count td"><div className="kc_img"></div>				</td>
								<td className="kc_count td"><div className="kc_img"></div>				</td>
								<td className="kc_count td"><div className="kc_img"></div>				</td>
								<td className="kc_count td"><div className="kc_img"></div>				</td>
							</tr>
						</table><br/>
						<br/>
					</div>
				<Footer/>
			</div>
		)
	}
}
