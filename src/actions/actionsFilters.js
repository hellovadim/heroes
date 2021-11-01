import {
  FILTERS_FETCHING,
  FILTERS_FETCHED,
  FILTERS_FETCHING_ERROR,
  ACTIVE_FILTER_CHANGED,
} from "./types";

export const fetchFilters = (request) => (dispatch) => {
  dispatch(filtersFetching());
  request("https://617ee0342ff7e600174bd939.mockapi.io/filter")
    .then((data) => dispatch(filtersFetched(data)))
    .catch(() => dispatch(filtersFetchingError()));
};

export const filtersFetching = () => {
  return {
    type: FILTERS_FETCHING,
  };
};

export const filtersFetched = (filters) => {
  return {
    type: FILTERS_FETCHED,
    payload: filters,
  };
};

export const filtersFetchingError = () => {
  return {
    type: FILTERS_FETCHING_ERROR,
  };
};

export const activeFilterChanged = (filter) => {
  return {
    type: ACTIVE_FILTER_CHANGED,
    payload: filter,
  };
};
