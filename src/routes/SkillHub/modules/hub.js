import update from 'react-addons-update'

//Contants
import { HUB_INPUT } from './actionConstants'

//Actions
export const getInput = payload => {
	return {
		type: HUB_INPUT,
		payload
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

const ACTION_HANDLERS = {
	HUB_INPUT: handleGetInput
}

const initialState = {
	searchDate: '',
	searchTerm: '',
	searchLocation: ''
};

export const HubReducer = (state = initialState, action) => {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state
}
