import { combineReducers } from "redux";

import  heroesReducer  from "./heroesReducer";
import  filtersReducer  from "./filtersReducer";

export default combineReducers({
  heroes: heroesReducer,
  filters: filtersReducer,
});
