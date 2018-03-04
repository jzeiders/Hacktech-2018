import * as constants from "../constants";
import { Event } from "../types";
import { Dispatch } from "redux";
import { fetchEvents } from "../api";

export interface SetEvents {
	type: constants.SET_EVENTS;
	events: Event[];
}

export type EventsAction = SetEvents;

export function setEvents(events: Event[]): SetEvents {
	return {
		type: constants.SET_EVENTS,
		events
	};
}

export function getEvents() {
	return (dispatch: Dispatch<EventsAction>) => {
		fetchEvents().then(events => {
			dispatch(setEvents(events));
		});
	};
}
