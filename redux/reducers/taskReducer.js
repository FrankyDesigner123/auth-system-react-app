import { FETCH_TASKS } from '../actions/taskAction';
const initialState = {
	tasks: [],
};
export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_TASKS:
			return {
				...state,
				tasks: action.payload,
			};
	}
	return state;
}
