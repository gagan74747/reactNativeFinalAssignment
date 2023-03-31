import {PRODUCT_DETAILS_API_URL} from '../../../configs/constants';
import {
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  REMOVE_PRODUCT_DETAILS,
} from './constants';

export const getProductDetails = () => ({
  type: GET_PRODUCT_DETAILS,
});

export const getProductDetailsSuccess = details => ({
  type: GET_PRODUCT_DETAILS_SUCCESS,
  payload: {
    details,
  },
});

export const getProductsDetailsFailure = error => ({
  type: GET_PRODUCT_DETAILS_FAIL,
  payload: {
    error,
  },
});

export const removeProductDetail = () => ({
  type: REMOVE_PRODUCT_DETAILS,
});

export const fetchProductDetails = id => {
  return dispatch => {
    dispatch(getProductDetails());
    fetch(PRODUCT_DETAILS_API_URL(id))
      .then(response => response.json())
      .then(productDetails => {
        dispatch(getProductDetailsSuccess(productDetails));
      })
      .catch(error => {
        dispatch(getProductsDetailsFailure(error));
      });
  };
};
