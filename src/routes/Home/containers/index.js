import { connect } from 'react-redux';

import {
	sayHello
} from '../modules/home'
import Home from '../components/'

const mapStateToProps = (state) => ({
	homeLoading: state.home.homeLoading
})

const mapActionCreators = {
	sayHello
};

export default connect(mapStateToProps, mapActionCreators)(Home);
