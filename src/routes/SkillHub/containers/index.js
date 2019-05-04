import { connect } from 'react-redux';

import {
	getInput
} from '../modules/hub'
import Hub from '../components/'

const mapStateToProps = (state) => ({
	searchDate: state.hub.searchDate,
	searchTerm: state.hub.searchTerm,
	searchLocation: state.hub.searchLocation
})

const mapActionCreators = {
	getInput
};

export default connect(mapStateToProps, mapActionCreators)(Hub);
