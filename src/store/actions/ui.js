import { ACTION_TYPES } from '../constants';

export const uiStartLoading = () => ({
    type: ACTION_TYPES.START_LOADING
});

export const uiStopLoading = () => ({
    type: ACTION_TYPES.STOP_LOADING
});