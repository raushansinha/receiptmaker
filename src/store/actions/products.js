import { ACTION_TYPES } from '../constants';

export const addProductAsync = (product) => ({
    type: ACTION_TYPES.ADD_PRODUCT_ASYNC,
    product
});

export const addProduct = (product) => ({
    type: ACTION_TYPES.ADD_PRODUCT_SUCCESS,
    product
});

export const getProductsAsync = () => ({
    type: ACTION_TYPES.GET_PRODUCT_ASYNC,
});

export const setProducts = (products) => ({
    type: ACTION_TYPES.GET_PRODUCT_SUCCESS,
    products
});

export const setAddProductError = (error) => ({
    type: ACTION_TYPES.ADD_PRODUCT_FAIL,
    error
});

export const setGetProductError = (error) => ({
    type: ACTION_TYPES.GET_PRODUCT_FAIL,
    error
});