import {
  HEROES_FETCHING,
  HEROES_FETCHED,
  HEROES_FETCHING_ERROR,
  HERO_DELETE,
  HERO_CREATE,
} from "../actions/types";

const initialState = {
  heroes: [],
  heroesLoadingStatus: true,
};

const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEROES_FETCHING:
      return {
        ...state,
        heroesLoadingStatus: true,
      };
    case HEROES_FETCHED:
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: false,
      };
    case HEROES_FETCHING_ERROR:
      return {
        ...state,
        heroesLoadingStatus: true,
      };
    case HERO_DELETE:
      return {
        ...state,
        heroes: state.heroes.filter((item) => item.id !== action.payload),
      };
    case HERO_CREATE:
      const newArr = [...state.heroes, action.payload];
      return {
        ...state,
        heroes: newArr,
      };

    default:
      return state;
  }
};

export default heroesReducer;
