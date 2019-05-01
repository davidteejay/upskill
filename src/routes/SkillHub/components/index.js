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
			carouselInstance: null
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
				<Footer hasBg/>
			</div>
		)
	}
}
