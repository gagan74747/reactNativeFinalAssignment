import {
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_SUCCESS,
  REMOVE_PRODUCT_DETAILS,
} from './constants';

const initialState = {
  productDetails: {},
  isLoading: false,
  error: null,
};

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productDetails: action.payload.details,
      };

    case GET_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    case REMOVE_PRODUCT_DETAILS:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
