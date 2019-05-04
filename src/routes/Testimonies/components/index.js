import React, { Component } from 'react'
import M from 'materialize-css'

import TopAds from '../../../components/TopAds'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

import 'materialize-css/dist/css/materialize.min.css'
import '../../../assets/css/components.min.css'
import '../../../assets/css/kc_css.css'

export default class Testimonies extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div className="testimonies">
				<TopAds/>
				<Nav active="explore"/>
				<div className="kc_testimonies-content">
					<div className="kc_testimony">
						<h3>Testimonies</h3>
						<div className="kc_img"></div>
						<div className="kc_testimonies-write">
							<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua...<br/>
							<b>James Dike</b><br/><span>April 19, 2019</span></p>
						</div>
					</div>	
					<div className="kc_testimony kc_right">
						<div className="kc_img"></div><div className="kc_testimonies-write">
							<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua...<br/>
							<b>James Dike</b><br/><span>April 19, 2019</span></p>
						</div>
					</div>
					<hr className="hr" width="90%"/>
					<div className="kc_testimony">
						<h3>Badges</h3>
						<div className="kc_img"></div><div className="kc_testimonies-write">
							<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua...<br/>
							<b>James Dike</b><br/><span>April 19, 2019</span></p>
						</div>
					</div>	
					<div className="kc_testimony kc_right">
						<div className="kc_img"></div><div className="kc_testimonies-write">
							<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua...<br/>
							<b>James Dike</b><br/><span>April 19, 2019</span></p>
						</div>
					</div>	
					<hr className="hr" width="90%"/>
					<br/>
					<br/>
					<h3>Project List</h3>
					<div className="kc_project">
						<div className="kc_project_list">
							<div className="kc_img"></div><div className="kc_testimonies-write">
								<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua...</p>
							</div>
						</div>
						<br/>
						<br/>
						<div className="kc_project_list">
							<div className="kc_img"></div><div className="kc_testimonies-write">
								<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua...</p>
							</div>
						</div>
						<br/>
						<br/>
						<div className="kc_project_list">
							<div className="kc_img"></div><div className="kc_testimonies-write">
								<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua...</p>
							</div>
						</div>
						<br/>								
					</div>
					<div className="kc_project2">
						<div className="kc_project_list">
							<div className="kc_img"></div><div className="kc_testimonies-write">
								<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua...</p>
							</div>
						</div>
						<br/>
						<br/>
						<div className="kc_project_list">
							<div className="kc_img"></div><div className="kc_testimonies-write">
								<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua...</p>
							</div>
						</div>
						<br/>
						<br/>
						<div className="kc_project_list">
							<div className="kc_img"></div><div className="kc_testimonies-write">
								<p>Lorem Ipsum dolor sit ammet consecteur  adipsing elit sed do tempor ut labore met  dolere magna aliqua. Lorem Ipsum dolor  sit ammet consecteur aliqua...</p>
							</div>
						</div>
						<br/>		
					</div>
					<br/>
					<br/>
					<div className="content center">
						<button className="btn z-depth-0" type="submit" >View All</button></div>
						<br/>
						<div className="attestaion">
							<h3>Request for Attestation</h3>
							<br/>
							<div className="col s10">
								<form className="row">
									<input className="browser-default kc_input" required="" type="text" placeholder="Lorem Ipsum"/>
									<input className="browser-default kc_input" required="" type="email" placeholder="Lorem Ipsum" style={{ marginLeft: '10%',  width: '50%' }}/>
									<br/><br/>
									<br/>
									<input className="browser-default kc_input" required="" type="text" placeholder="Lorem Ipsum"/>
									<input className="browser-default kc_input" required="" type="text" placeholder="Lorem Ipsum" style={{ marginLeft: '10%', width: '30%' }}/><br/>
									<br/>
									<textarea className="browser-default kc_input" required placeholder="Message" style={{ height: '10%', width: '90%' }} rows="10" cols="100"></textarea>
									<div className="content center">
										<button className="btn z-depth-0" type="submit">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<Footer hasBg/>
				</div>
		)
	}
}
