import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import EventsStore from "./events";
import UsersStore from "./users";
import PhotosStore from "./photos";
import { StoreState } from "../types";

let reducers = {
	EventsStore,
	UsersStore,
	PhotosStore,
	routing
};

export default combineReducers<StoreState>(reducers);
