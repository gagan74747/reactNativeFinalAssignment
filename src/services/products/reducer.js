import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  SET_BRAND_FILTER,
  SORT_PRODUCTS,
} from './constants';

const initialState = {
  categories: [],
  filteredProductsData: {
    products: [],
    filteredOn: 'All',
    sortedOn: '',
  },
  products: [],
  isLoading: false,
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
        filteredProductsData: {
          ...state.filteredProductsData,
          products: action.payload.products,
        },
        categories: [
          'All',
          ...Array.from(
            new Set(action.payload.products.map(product => product.category)),
          ),
        ],
      };
    case GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case SET_BRAND_FILTER:
      return action.payload.brand.toLowerCase() === 'all'
        ? {
            ...state,
            filteredProductsData: {
              ...state.filteredProductsData,
              products: state.products,
              filteredOn: action.payload.brand,
            },
          }
        : {
            ...state,
            filteredProductsData: {
              ...state.filteredProductsData,
              products: state.products.filter(
                product => product.category === action.payload.brand,
              ),
              filteredOn: action.payload.brand,
            },
          };
    case SORT_PRODUCTS:
      return {
        ...state,
        filteredProductsData: {
          ...state.filteredProductsData,
          products: [...state.filteredProductsData.products].sort((a, b) =>
            action.payload.type === 'Price-Low To High'
              ? a.price - b.price
              : b.price - a.price,
          ),
          sortedOn: action.payload.type,
        },
      };
    default:
      return state;
  }
};
