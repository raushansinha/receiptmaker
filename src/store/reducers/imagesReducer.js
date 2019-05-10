
import { ACTION_TYPES } from '../constants';

const initialState = {
    images: [],
}

const imagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.LOAD_IMAGES_SUCCESS: 
            return {
                ...state,
                images:[...state.images, action.images] 
            }
        case ACTION_TYPES.LOAD_IMAGES_FAILD :
            return state;
        default:
            return state;
    }
}

export default imagesReducer;