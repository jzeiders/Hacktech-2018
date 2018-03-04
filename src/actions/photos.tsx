import * as constants from "../constants";
import { Photo } from "../types";
import { fetchPhotos } from "../api";
import { Dispatch } from "redux";

export interface SetPhotos {
	type: constants.SET_PHOTOS;
	photos: Photo[];
}

export type PhotosAction = SetPhotos;

export function setPhotos(photos: Photo[]): SetPhotos {
	return {
		type: constants.SET_PHOTOS,
		photos
	};
}
export function getPhotos() {
	return (dispatch: Dispatch<PhotosAction>) => {
		fetchPhotos().then(photos => {
			dispatch(setPhotos(photos));
		});
	};
}
