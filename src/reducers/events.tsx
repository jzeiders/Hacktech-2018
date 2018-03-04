import { EventsStore } from "../types";
import { EventsAction } from "../actions";
import { SET_EVENTS } from "../constants";

const initialState: EventsStore = {
	Events: []
};

const EventsReducer = (
	state = initialState,
	action: EventsAction
): EventsStore => {
	switch (action.type) {
		case SET_EVENTS:
			return {
				Events: action.events
			};
		default:
			return state;
	}
};

export default EventsReducer;
