import update from 'react-addons-update'

//Contants
import {  } from './actionConstants'

//Actions


//Action Handlers


const ACTION_HANDLERS = {
	
}

const initialState = {
	
};

export const HubReducer = (state = initialState, action) => {
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state
}
