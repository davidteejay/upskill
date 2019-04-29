import { connect } from 'react-redux'

import {
	getInput,
	signIn
} from '../modules/signin'
import Signin from '../components/'

const mapStateToProps = state => ({
	email: state.signin.email,
	password: state.signin.password,
	signinLoading: state.signin.signinLoading
})

const mapActionCreators = {
	getInput,
	signIn
}

export default connect(mapStateToProps, mapActionCreators)(Signin)
