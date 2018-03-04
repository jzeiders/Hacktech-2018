import { Event, User, Photo } from "../types";
import { URI } from "../constants";
import * as firebase from "firebase";

const config = {
	apiKey: "AIzaSyBA0Yj0nEEp24-DfvRAqHfMEkgIf2_q74M",
	authDomain: "hacktech-312f1.firebaseapp.com",
	databaseURL: "https://hacktech-312f1.firebaseio.com",
	projectId: "hacktech-312f1",
	storageBucket: "hacktech-312f1.appspot.com",
	messagingSenderId: "6252466671"
};
firebase.initializeApp(config);

let fetchEvents = () => {
	return fetch(URI + `/events/all`).then(res => res.json());
};
let fetchPhotos = () => {
	return fetch(URI + `/photos/all`).then(res => res.json());
};
let fetchUsers = (): Promise<User[]> => {
	const db = firebase.database();
	return new Promise((res, rej) => {
		db
			.ref("/Users")
			.once("value")
			.then(snapshot => {
				let children: User[] = [];
				snapshot.forEach((childSnapshot: firebase.database.DataSnapshot) => {
					children.push({
						...childSnapshot.val(),
						userId: childSnapshot.key
					});
				});
				res(children);
			});
	});
};

const eventA: Event = {
	name: "Event A",
	startTime: new Date(),
	endTime: new Date(),
	eventId: 1,
	lat: 40,
	lng: 40
};
const eventB: Event = {
	name: "Event B",
	startTime: new Date(),
	endTime: new Date(),
	eventId: 2,
	lat: 50,
	lng: 30
};

const userA: User = {
	firstName: "Samuel",
	lastName: "Resendez",
	userId: "jdfaskdjfsa"
};
const userB: User = {
	firstName: "Olivia",
	lastName: "Brown",
	userId: "djfhadskjfaksj"
};

const photoA: Photo = {
	url: "http://via.placeholder.com/350x150",
	eventId: 1,
	userId: "djfhadskjfaksj",
	lat: 40,
	lng: 40
};
const photoB: Photo = {
	url: "http://via.placeholder.com/350x150",
	eventId: 1,
	userId: "jdfaskdjfsa",
	lat: 50,
	lng: 30
};

let fetchEventsStub = () => {
	return Promise.resolve([eventA, eventB]);
};
let fetchPhotosStub = () => {
	return Promise.resolve([photoA, photoB, photoA, photoB, photoA, photoB]);
};
let fetchUsersStub = () => {
	return Promise.resolve([userA, userB]);
};

// fetchEvents = fetchEventsStub;
// fetchPhotos = fetchPhotosStub;
// fetchUsers = fetchUsersStub;

export { fetchEvents, fetchPhotos, fetchUsers };
export * from "./post";
export { fetchEventsStub, fetchPhotosStub, fetchUsersStub };
