import update from 'react-addons-update'
import M from 'materialize-css'

//Contants
import { SIGNIN_INPUT, SIGNIN_LOADING } from './actionConstants'

//Actions
export const getInput = payload => {
	return {
		type: SIGNIN_INPUT,
		payload
	}
}

export const signIn = () => {
	return(dispatch, store) => {
		M.toast({ html: '<span>Sign In</span>' })
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

const handleSigninLoading = (state, action) => {
	return update(state, {
		signinLoading: {
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
	SIGNIN_INPUT: handleGetInput,
	SIGNIN_LOADING: handleSigninLoading
}

const initialState = {
	email: '',
	password: '',
	signinLoading: false
};

export const SigninReducer = (state = initialState, action) => {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state
}
