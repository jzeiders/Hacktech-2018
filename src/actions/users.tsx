import * as constants from "../constants";
import { User } from "../types";
import { Dispatch } from "redux";
import { fetchUsers } from "../api";

export interface SetUsers {
	type: constants.SET_USERS;
	users: User[];
}

export type UsersAction = SetUsers;

export function setUsers(users: User[]): SetUsers {
	return {
		type: constants.SET_USERS,
		users
	};
}

export function getUsers() {
	return (dispatch: Dispatch<UsersAction>) => {
		fetchUsers().then(users => {
			dispatch(setUsers(users));
		});
	};
}
