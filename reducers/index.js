import {
	SET_MODE
} from '../actions/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case SET_MODE: {
			return Object.assign({}, state, {
				mode: action.mode
			});
		}
		default:
			return state
	}
};
