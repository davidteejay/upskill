import { connect } from 'react-redux'

import {
	getInput,
	signUp
} from '../modules/signup'
import Signup from '../components/'

const mapStateToProps = state => ({
	firstName: state.signup.firstName,
	lastName: state.signup.lastName,
	email: state.signup.email,
	password: state.signup.password,
	repassword: state.signup.repassword,
	signupLoading: state.signup.signupLoading
})

const mapActionCreators = {
	getInput,
	signUp
}

export default connect(mapStateToProps, mapActionCreators)(Signup)
