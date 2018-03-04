import { routerReducer } from "react-router-redux";

export type StoreState = {
	EventsStore: EventsStore;
	PhotosStore: PhotosStore;
	UsersStore: UsersStore;
	routing: typeof routerReducer;
};
export type EventsStore = {
	Events: Event[];
};
export type PhotosStore = {
	Photos: Photo[];
};
export type UsersStore = {
	Users: User[];
};
export type Event = {
	name: string;
	startTime: Date;
	endTime: Date;
	eventId: number;
	lat: number;
	lng: number;
};

export type Photo = {
	url: string;
	eventId: number;
	userId: string;
	lat: number;
	lng: number;
};

export type User = {
	firstName: string;
	lastName: string;
	userId: string;
};
