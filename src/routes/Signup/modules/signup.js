import update from 'react-addons-update'
import M from 'materialize-css'

//Contants
import { SIGNUP_INPUT, SIGNUP_LOADING } from './actionConstants'

//Actions
export const getInput = payload => {
	return {
		type: SIGNUP_INPUT,
		payload
	}
}

export const signUp = () => {
	return(dispatch, store) => {
		M.toast({ html: '<span>Sign Up</span>' })
	}
}

//Action Handlers
const handleGetInput = (state, action) => {
	const { key, value } = action.payload

	return update(state, {
		[key]: {
			$set: value
		}
	})
}

const handleSignupLoading = (state, action) => {
	return update(state, {
		signupLoading: {
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
	SIGNUP_INPUT: handleGetInput,
	SIGNUP_LOADING: handleSignupLoading
}

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	repassword: '',
	signupLoading: false
};

export const SignupReducer = (state = initialState, action) => {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state
}
