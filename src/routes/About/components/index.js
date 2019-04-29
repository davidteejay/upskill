import React, { Component } from 'react'

import TopAds from '../../../components/TopAds'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

import 'materialize-css/dist/css/materialize.min.css'
import '../../../assets/css/style.min.css'

export default class About extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render(){
		return (
			<div className="about">
				<TopAds />
				<Nav active="about" />
				<div className="about-container">
					<div className="values">
						<h2>About Us</h2>
						<p className="center">Upskill Nigeria is building a community for young professionals to learn skills in diverse fields with the best training resources, mentorship, networking and community engagement. With our decentralized community network, we are empowering young professionals with the skills and opportunities to keep up with the fast paced world while also connecting companies with skilled professionals to make your ideas happen and push forward together.</p>
						<div className="vision">
							<div className="img"></div>
							<div className="text">
								<h4>Our Vision & Mission</h4>
								<p>We are passionate about building the world’s largest community of young professionals who are on their way to change the world and your businesses. With over 60 million youths and 20 million graduates living in Nigeria, who lack the relevant skill set and experience needed to grow businesses and succeed in the evolving world, we are on a mission to bridge the unemployability gap through training, mentorship and community building.</p>
							</div>
						</div>
						<h4 class="core-head">Our Core Values</h4>
						<p>We value a collaborative environment of people who have the right attitude to work, show excellence and always get things done.</p>
					</div>
					<div className="core">
						<h4>Our Core Values</h4>
						<div className="row">
							<div className="col l3 m6 s12 center">
								<h1>50+</h1>
								<h5>COURSES</h5>
							</div>
							<div className="col l3 m6 s12 center">
								<h1>30+</h1>
								<h5>SKILL SETS</h5>
							</div>
							<div className="col l3 m6 s12 center">
								<h1>40+</h1>
								<h5>MENTORS / TUTORS</h5>
							</div>
							<div className="col l3 m6 s12 center">
								<h1>100+</h1>
								<h5>COMMUNITY TOPICS</h5>
							</div>
						</div>
					</div>
					<div className="works">
						<h3 className="center">How it Works</h3>
						<div className="row">
							<div className="col s12 m6 l4">
								<div className="number">1</div>
								<div className="img" />
								<h4 className="light center">Sign Up</h4>
								<p className="center">
									Complete your profile and apply with your personal details.
              </p>
							</div>
							<div className="col s12 m6 l4">
								<div className="number">2</div>
								<div className="img" />
								<h4 className="light center">Choose A Skill</h4>
								<p className="center">
									Explore our recommendations or choose from our great selection of on demand skills
              </p>
							</div>
							<div className="col s12 m6 l4 push-m3">
								<div className="number">3</div>
								<div className="img" />
								<h4 className="light center">Learn A Skill</h4>
								<p className="center">
									Learn and improve your preferred skill set with the best training resources, guided mentorship and tools available.
              </p>
							</div>
							<div className="clearfix" />
						</div>
						<div className="row">
							<div className="col s12 m6 l4">
								<div className="number">4</div>
								<div className="img" />
								<h4 className="light center">Join A Community</h4>
								<p className="center">
									Join a local community near you and experience an amazing network of vibrant people like you.
              </p>
							</div>
							<div className="col s12 m6 l4">
								<div className="number">5</div>
								<div className="img" />
								<h4 className="light center">Explore Opportunities</h4>
								<p className="center">
									Get access to our wide selection of job opportunities tailored to your preferred skill set.
              </p>
							</div>
							<div className="col s12 m6 l4 push-m3">
								<div className="number">6</div>
								<div className="img" />
								<h4 className="light center">Apply For Opportunities</h4>
								<p className="center">
									Find the right job and apply. Get real world experience working on exciting projects and advance your career.
              </p>
							</div>
							<div className="clearfix" />
						</div>
					</div>
					<div className="team">
						<h2>The Team</h2>
						<p>We are an energetic team of talented people who deliver amazing results and make things happen every day. We are always looking to take on the next challenge of developing talents across the world. Say hello to the team.</p>
						<div className="row">
							<div className="col l3 m6 s12">
								<div className="card z-depth-2 hoverable">
									<div className="img"/>
									<h5>Kevin, Asaba</h5>
									<p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
								</div>
							</div>
							<div className="col l3 m6 s12">
								<div className="card z-depth-2 hoverable">
									<div className="img" />
									<h5>Kevin, Asaba</h5>
									<p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
								</div>
							</div>
							<div className="col l3 m6 s12">
								<div className="card z-depth-2 hoverable">
									<div className="img" />
									<h5>Kevin, Asaba</h5>
									<p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
								</div>
							</div>
							<div className="col l3 m6 s12">
								<div className="card z-depth-2 hoverable">
									<div className="img" />
									<h5>Kevin, Asaba</h5>
									<p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
								</div>
							</div>
							<div className="col l3 m6 s12">
								<div className="card z-depth-2 hoverable">
									<div className="img" />
									<h5>Kevin, Asaba</h5>
									<p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
								</div>
							</div>
							<div className="col l3 m6 s12">
								<div className="card z-depth-2 hoverable">
									<div className="img"/>
									<h5>Kevin, Asaba</h5>
									<p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
								</div>
							</div>
							<div className="col l3 m6 s12">
								<div className="card z-depth-2 hoverable">
									<div className="img" />
									<h5>Kevin, Asaba</h5>
									<p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
								</div>
							</div>
							<div className="col l3 m6 s12">
								<div className="card z-depth-2 hoverable">
									<div className="img"/>
									<h5>Kevin, Asaba</h5>
									<p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
								</div>
							</div>
						</div>
					</div>
					<div className="learn">
						<div className="content center">
							<button className="btn btn-large z-depth-3">Start Learning Today</button>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}
