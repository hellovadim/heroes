import {
  HEROES_FETCHING,
  HEROES_FETCHED,
  HEROES_FETCHING_ERROR,
  HERO_DELETE,
  HERO_CREATE,
} from "./types";

export const fetchHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching());
  request("https://617ee0342ff7e600174bd939.mockapi.io/heroes")
    .then((data) => dispatch(heroesFetched(data)))
    .catch(() => dispatch(heroesFetchingError()));
};



export const heroesFetching = () => {
  return {
    type: HEROES_FETCHING,
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: HEROES_FETCHED,
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: HEROES_FETCHING_ERROR,
  };
};
export const heroDelete = (id) => {
  return {
    type: HERO_DELETE,
    payload: id,
  };
};
export const createHero = (hero) => {
  return {
    type: HERO_CREATE,
    payload: hero,
  };
};


