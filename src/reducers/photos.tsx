import { PhotosStore } from "../types";
import { PhotosAction } from "../actions";
import { SET_PHOTOS } from "../constants";

const initialState: PhotosStore = {
	Photos: []
};

const PhotosReducer = (
	state = initialState,
	action: PhotosAction
): PhotosStore => {
	switch (action.type) {
		case SET_PHOTOS:
			return {
				Photos: action.photos
			};
		default:
			return state;
	}
};

export default PhotosReducer;
