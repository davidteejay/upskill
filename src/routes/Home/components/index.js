import React, { Component } from 'react'
import M from 'materialize-css'
import Slider from 'react-slick'

import Loading from '../../../components/Preloader'
import TopAds from '../../../components/TopAds'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

import '../../../assets/slick/slick.css'
import '../../../assets/slick/slick-theme.css'

import 'materialize-css/dist/css/materialize.min.css'
import '../../../assets/css/style.min.css'

export default class Home extends Component {
	constructor(props){
		super(props)

		this.state = {
			activeCategory: 1,
		}
	}

	async componentWillMount(){
		await this.props.sayHello()

		let collapsible = document.querySelectorAll('.collapsible')
		let options = {}

		M.Collapsible.init(collapsible, options)
  }
  
  selectCategory(index){
    this.setState({ activeCategory: index })
  }

	render(){
    const categorySliderOptions = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }

    const partnersSliderOptions = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    }

		return (
      <div className="home">
        <TopAds />
        <div className="header">
          <div className="header-content">
            <Nav isHome />
          </div>
        </div>
        <div className="works">
          <h3 className="center">How it Works</h3>
          <div className="row">
            <div className="col s12 m6 l4">
              <div className="number">1</div>
              <div className="img" />
              <h4 className="light center">Lorem Ipsum</h4>
              <p className="center">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem
              </p>
            </div>
            <div className="col s12 m6 l4">
              <div className="number">2</div>
              <div className="img" />
              <h4 className="light center">Lorem Ipsum</h4>
              <p className="center">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem
              </p>
            </div>
            <div className="col s12 m6 l4 push-m3">
              <div className="number">3</div>
              <div className="img" />
              <h4 className="light center">Lorem Ipsum</h4>
              <p className="center">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem
              </p>
            </div>
            <div className="clearfix" />
          </div>
          <div className="row">
            <div className="col s12 m6 l4">
              <div className="number">4</div>
              <div className="img" />
              <h4 className="light center">Lorem Ipsum</h4>
              <p className="center">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem
              </p>
            </div>
            <div className="col s12 m6 l4">
              <div className="number">5</div>
              <div className="img" />
              <h4 className="light center">Lorem Ipsum</h4>
              <p className="center">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem
              </p>
            </div>
            <div className="col s12 m6 l4 push-m3">
              <div className="number">6</div>
              <div className="img" />
              <h4 className="light center">Lorem Ipsum</h4>
              <p className="center">
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="skills">
          <div className="row">
            <div className="col m3 s12">
              <div className="content">
                <div className="categories">
                  <h5 className="center">CATEGORIES</h5>
                  <ul className="collapsible">
                    <li className="active">
                      <div className="collapsible-header">Lorem Ipsum</div>
                      <div className="collapsible-body">Lorem Ipsum</div>
                    </li>
                    <li>
                      <div className="collapsible-header">Lorem Ipsum</div>
                      <div className="collapsible-body">Lorem Ipsum</div>
                    </li>
                    <li>
                      <div className="collapsible-header">Lorem Ipsum</div>
                      <div className="collapsible-body">Lorem Ipsum</div>
                    </li>
                  </ul>
                </div>
                <div className="advert valign-wrapper">
                  <h5 className="light valign">ADVERT SPACE</h5>
                </div>
              </div>
            </div>
            <div className="col m9 s12">
              <div className="content">
                <div className="skill-inner">
                  <h5 className="center">EXPLORE SKILLS</h5>
                  <Slider { ...categorySliderOptions }>
                    <div className="skill">
                      <div className="inner"/>
                    </div>
                    <div className="skill">
                      <div className="inner"/>
                    </div>
                    <div className="skill">
                      <div className="inner"/>
                    </div>
                    <div className="skill">
                      <div className="inner"/>
                    </div>
                    <div className="skill">
                      <div className="inner" />
                    </div>
                  </Slider>
                </div>
                <div className="courses">
                  <h5 className="center">FEATURED COURSES</h5>
                  <div className="row">
                    <div className="col s12 m6 l3">
                      <div className="course" />
                    </div>
                    <div className="col s12 m6 l3">
                      <div className="course" />
                    </div>
                    <div className="col s12 m6 l3">
                      <div className="course" />
                    </div>
                    <div className="col s12 m6 l3">
                      <div className="course" />
                    </div>
                    <div className="col s12 center">
                      <button className="btn z-depth-0">
                        See More &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonies">
          <div className="testimonies-content">
            <h3>User Testimonials</h3>
            <h5>Don't just take our word for it...</h5>
            <h5>Our power users say</h5>
            <Slider { ...categorySliderOptions }>
              <div className="testimony center">
                <div className="img"/>
                <h5>Kevin, Asaba</h5>
                <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
              </div>
              <div className="testimony center">
                <div className="img" />
                <h5>Kevin, Asaba</h5>
                <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
              </div>
              <div className="testimony center">
                <div className="img" />
                <h5>Kevin, Asaba</h5>
                <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
              </div>
              <div className="testimony center">
                <div className="img" />
                <h5>Kevin, Asaba</h5>
                <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
              </div>
              <div className="testimony center">
                <div className="img" />
                <h5>Kevin, Asaba</h5>
                <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
              </div>
              <div className="testimony center">
                <div className="img" />
                <h5>Kevin, Asaba</h5>
                <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
              </div>
              <div className="testimony center">
                <div className="img" />
                <h5>Kevin, Asaba</h5>
                <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
              </div>
            </Slider>
          </div>
        </div>
        <div className="partners">
          <div className="row">
            <div className="col s12 m5 push-m7 l4 push-l8">
              <h3>Our Partners</h3>
              <h5 className="light">Our power users say</h5>
            </div>
            <div className="col s12 m7 pull-m5 l8 pull-l4">
              <Slider {...partnersSliderOptions}>
                <div className="slide">
                  <div className="inner"/>
                </div>
                <div className="slide">
                  <div className="inner"/>
                </div>
                <div className="slide">
                  <div className="inner"/>
                </div>
                <div className="slide">
                  <div className="inner"/>
                </div>
                <div className="slide">
                  <div className="inner"/>
                </div>
                <div className="slide">
                  <div className="inner" />
                </div>
                <div className="slide">
                  <div className="inner"/>
                </div>
                <div className="slide">
                  <div className="inner"/>
                </div>
                <div className="slide">
                  <div className="inner" />
                </div>
                <div className="slide">
                  <div className="inner" />
                </div>
                <div className="slide">
                  <div className="inner"/>
                </div>
                <div className="slide">
                  <div className="inner" />
                </div>
                <div className="slide">
                  <div className="inner" />
                </div>
                <div className="slide">
                  <div className="inner" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="learn">
          <div className="content center">
            <button className="btn btn-large z-depth-0">Start Learning Today</button>
          </div>
        </div>
        <Footer/>
        <Loading loading={this.props.homeLoading} />
      </div>
    );
	}
}
