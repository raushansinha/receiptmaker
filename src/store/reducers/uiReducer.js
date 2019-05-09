import { ACTION_TYPES } from '../constants';

const initialState = {
    isLoading: false
}

const uiReducer = (state=initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ACTION_TYPES.STOP_LOADING:
        return {
            ...state,
            isLoading: false
        }
        default:
            return state;
    }
};

export default uiReducer;