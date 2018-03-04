import { UsersStore } from "../types";
import { UsersAction } from "../actions";
import { SET_USERS } from "../constants";

const initialState: UsersStore = {
	Users: []
};

const UsersReducer = (
	state = initialState,
	action: UsersAction
): UsersStore => {
	switch (action.type) {
		case SET_USERS:
			return {
				Users: action.users
			};
		default:
			return state;
	}
};

export default UsersReducer;
