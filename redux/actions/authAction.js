export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export const registerUser = (authData) => {
	// grab
	const { fullName, email, password, role } = authData;

	// dispatch the registerUser function
	return async (dispatch) => {
		// logic to make post req to register user
		const result = await fetch('http://192.168.1.63:3000/api/users/register', {
			// get the result
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				fullName,
				email,
				password,
				role,
			}),
		});
		// convert result to JSON format
		const resultData = await result.json();
		console.log(resultData);

		// return object with type and payload
		dispatch({
			type: REGISTER_USER_SUCCESS,
			payload: 1,
		});
	};
};

export const loginUser = (authData) => {
	const { email, password } = authData;

	// dispatch the loginUser function
	return async (dispatch) => {
		// logic to make post req to login user

		// return object with type and payload
		dispatch({
			type: LOGIN_USER_SUCCESS,
			payload: 1,
		});
	};
};
