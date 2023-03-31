import {API_URL} from '../../../configs/constants';
import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  SET_BRAND_FILTER,
  SORT_PRODUCTS,
} from './constants';

export const sortProducts = type => ({type: SORT_PRODUCTS, payload: {type}});

export const getProducts = () => ({
  type: GET_ALL_PRODUCTS,
});

export const setBrandFilter = brand => ({
  type: SET_BRAND_FILTER,
  payload: {
    brand,
  },
});

export const getProductsSuccess = products => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: {
    products,
  },
});

export const getProductsFailure = error => ({
  type: GET_ALL_PRODUCTS_FAIL,
  payload: {
    error,
  },
});

export const getAllProducts = () => {
  return dispatch => {
    dispatch(getProducts());
    fetch(API_URL)
      .then(response => response.json())
      .then(products => {
        dispatch(getProductsSuccess(products));
      })
      .catch(error => {
        dispatch(getProductsFailure(error));
      });
  };
};
