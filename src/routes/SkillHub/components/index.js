import React, { Component } from 'react'
import M from 'materialize-css'

import TopAds from '../../../components/TopAds'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

import 'materialize-css/dist/css/materialize.min.css'
import '../../../assets/css/style.min.css'

let carouselInterval = null

export default class Hub extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeCategory: 1,
			carouselInstance: null,
			categories: [
				{
					title: 'Lorem Ipsum',
					description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer magna',
					color: 'green',
					courses: 12,
				}, {
					title: 'Lorem Ipsum',
					description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer magna',
					color: 'orange',
					courses: 1,
				}, {
					title: 'Lorem Ipsum',
					description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer magna',
					color: 'red',
					courses: 7,
				}, {
					title: 'Lorem Ipsum',
					description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Lorem ipsum dolor sit amet, consectetuer magna',
					color: 'black',
					courses: 5,
				}
			]
		}

		this.nextSlide = this.nextSlide.bind(this)
		this.prevSlide = this.prevSlide.bind(this)
	}

	componentDidMount() {
		let carousel = document.querySelectorAll('.carousel')
		let carouselOptions = {
			indicators: true,
			fullWidth: true
		}

		M.Carousel.init(carousel, carouselOptions)

		let carouselInstance = M.Carousel.getInstance(document.querySelector('.carousel'))
		this.setState({ carouselInstance })
		carouselInterval = setInterval(() => carouselInstance.next(), 5000)
	}

	componentWillUnmount() {
		clearInterval(carouselInterval)
	}

	selectCategory(index) {
		this.setState({ activeCategory: index })
	}

	prevSlide() {
		this.state.carouselInstance.prev()
	}

	nextSlide() {
		this.state.carouselInstance.next()
	}

	handleInput(key, e) {
		// console.log(e.target.value)

		this.props.getInput({
			key,
			value: e.target.value
		})
	}

	render() {
		return (
			<div className="hub">
				<TopAds />
				<div className="header">
					<div className="header-content">
						<Nav active="hub" />
						<div className="carousel-cover">
							<div className="carousel">
								<a href="#!" className="carousel-item">
									<div className="overlay">
										<div className="img"/>
										<div className="text">
											<h2 className="light white-text">INTRODUCTION TO HTML & CSS</h2>
											<h6 className="light white-text">Intro to HTML and CSS. Throughout this course, you'll learn about the underlying structure of the web - HTML. You'll learn how to use this tree-like structure to ...</h6>
											<button className="btn z-depth-2">Start Course</button>
										</div>
									</div>
								</a>
								<a href="#!" className="carousel-item">
									<div className="overlay">
										
									</div>
								</a>
								<a href="#!" className="carousel-item">
									<div className="overlay">
										
									</div>
								</a>
							</div>
							<div className="arrows">
								<button className="btn z-depth-0" onClick={this.prevSlide}>&lsaquo;</button>
								<button className="btn z-depth-0" onClick={this.nextSlide}>&rsaquo;</button>
							</div>
						</div>
					</div>
				</div>
				<div className="intro">
					<h2>SkillHub</h2>
					<p className="center">Experience a different kind of learning; a more inclusive approach to learning. Learn and improve your skills through the aid of guided mentorship from super passionate mentors, the best learning resources and knowledge by experts in your industry. Our goal is to make the learning process an awesome and seamless experience for you, and while at it, empower the next generation of industry experts who are badass at what they do.</p>
				</div>
				<div className="categories">
					<h4 className="center">Categories</h4>
					<div className="filter">
						<button className="btn z-depth-2">
							All Categories
							<i className="material-icons right">arrow_right</i>
						</button>
					</div>
					<div className="row">
						<div className="col s12 m6">
							<span className="left">Category</span>
							<span className="right">Courses</span>
							<div className="clearfix"></div>
						</div>
						<div className="col s12 m6 hide-on-small-only">
							<span className="left">Category</span>
							<span className="right">Courses</span>
							<div className="clearfix"></div>
						</div>
						{this.state.categories.map((category, i) => {
							return <div key={i} className="col s12 m6 category">
								<div className="content left">
									<h6 className="title" style={{ backgroundColor: category.color }}>{category.title}</h6>
									<p>{category.description}</p>
								</div>
								<div className="course right">
									<span>{category.courses}</span>
								</div>
								<div className="clearfix"></div>
							</div>
						})}
					</div>
				</div>
				<div className="testimonials">
					<h4 className="center">User Testimonials</h4>
					<div className="featured">
						<div className="img"/>
						<div className="text">
							<h5>Craig McKenna</h5>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
							<button className="btn z-depth-2">Read the full testimonial</button>
						</div>
					</div>
					<div className="row">
						<div className="col s12 m6">
							<div className="img"/>
							<div className="text">
								<h6>Lorem ipsum dolor sit amet</h6>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
							</div>
						</div>
						<div className="col s12 m6">
							<div className="img"/>
							<div className="text">
								<h6>Lorem ipsum dolor sit amet</h6>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
							</div>
						</div>
						<div className="col s12 m6">
							<div className="img" />
							<div className="text">
								<h6>Lorem ipsum dolor sit amet</h6>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
							</div>
						</div>
						<div className="col s12 m6">
							<div className="img" />
							<div className="text">
								<h6>Lorem ipsum dolor sit amet</h6>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
							</div>
						</div>
						<div className="col s12">
							<div className="text">
								<a href="/#!"><h6>More User Testimonials</h6></a>
							</div>
						</div>
					</div>
				</div>
				<div className="community">
					<h4>Community Events</h4>
					<div className="row search-form">
						<div className="col s12 m6 l4">
							<h6>EVENTS ON</h6>
							<input type="text" placeholder="Date" value={this.props.searchDate} onChange={this.handleInput.bind(this, 'searchDate')}/>
						</div>
						<div className="col s12 m6 l3">
							<h6>SEARCH</h6>
							<input type="text" placeholder="Search" value={this.props.searchTerm} onChange={this.handleInput.bind(this, 'searchTerm')} />
						</div>
						<div className="col s12 m6 l3">
							<h6>NEAR</h6>
							<input type="text" placeholder="Location" value={this.props.searchLocation} onChange={this.handleInput.bind(this, 'searchLocation')} />
						</div>
						<div className="col s12 m6 l2">
							<button className="btn btn-large z-depth-2">FIND EVENTS</button>
						</div>
					</div>
					<h4 className="event-title">Events for April</h4>
					<div className="timetable">
						<div className="column">
							<div className="title">
								<h6>SUNDAY</h6>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet,</p>
							</div>
						</div>
						<div className="column">
							<div className="title">
								<h6>MONDAY</h6>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet,</p>
							</div>
						</div>
						<div className="column">
							<div className="title">
								<h6>TUESDAY</h6>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet,</p>
							</div>
						</div>
						<div className="column">
							<div className="title">
								<h6>WEDNESDAY</h6>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet,</p>
							</div>
						</div>
						<div className="column">
							<div className="title">
								<h6>THURSDAY</h6>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet,</p>
							</div>
						</div>
						<div className="column">
							<div className="title">
								<h6>FRIDAY</h6>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet,</p>
							</div>
						</div>
						<div className="column">
							<div className="title">
								<h6>SATURDAY</h6>
							</div>
							<div className="content">
								<p>Lorem ipsum dolor sit amet,</p>
							</div>
						</div>
					</div>
				</div>
				<Footer hasBg/>
			</div>
		)
	}
}
