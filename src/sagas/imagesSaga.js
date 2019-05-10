import { takeEvery, takeLatest, take, call, put } from 'redux-saga/effects';
import { ACTION_TYPES } from '../store/constants';
import { fetchImages } from '../api';


function* handleImageLoad() {
    const images = yield call(fetchImages, 1);
}

export const  imageSaga =[
    takeEvery(ACTION_TYPES.LOAD_IMAGES, handleImageLoad)
];

