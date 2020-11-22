export const FETCH_TASKS = 'FETCH_TASKS';
export const CREATE_TASKS = 'CREATE_TASKS';

export const fetchTasks = () => {
	return async (dispatch) => {
		// add logic to fetch tasks from API

		dispatch({
			type: FETCH_TASKS,
			payload: 1,
		});
	};
};
