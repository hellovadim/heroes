import {
  FILTERS_FETCHED,
  FILTERS_FETCHING_ERROR,
  ACTIVE_FILTER_CHANGED,
} from "../actions/types";

const initialState = {
  filters: [],
  filtersLoadingStatus: true,
  activeFilter: "all",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERS_FETCHED:
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: false,
      };
    case FILTERS_FETCHING_ERROR:
      return {
        ...state,
        filtersLoadingStatus: true,
      };
    case ACTIVE_FILTER_CHANGED:
      return {
        ...state,
        activeFilter: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
