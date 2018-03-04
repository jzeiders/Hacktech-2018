import { URI } from "../constants";
import { Event } from "../types";

let postEvent = (event: Event) => {
	let body = JSON.stringify({
		name: event.name,
		lat: event.lat,
		lng: event.lng,
		start_time: event.startTime,
		end_time: event.endTime
	});
	return fetch(URI + "/event/add", {
		body,
		method: "POST"
	});
};

export { postEvent };
