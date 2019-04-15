import update from 'react-addons-update'

//Contants
import { HOME_LOADING } from './actionConstants'

//Actions
export const sayHello = () => {
	return (dispatch, store) => {
		dispatch({
			type: HOME_LOADING,
			payload: false
		})
	}
}

//Action Handlers
const handleSayHello = (state, action) => {
	return update(state, {
		homeLoading: {
			$set: action.payload
		}
	})
}

const ACTION_HANDLERS = {
	HOME_LOADING: handleSayHello
}

const initialState = {
	homeLoading: true
};

export const HomeReducer = (state = initialState, action) => {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state
}
