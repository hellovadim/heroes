import { useHttp } from "../../hooks/http.hook";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import {
  fetchHeroes,
  heroDelete
} from "../../actions/actionsHeroes";
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";

const HeroesList = () => {
  const filteredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    (state) => state.heroes.heroes,
    (filter, heroes) => {
      if (filter === "all") {
        return heroes;
      } else {
        return heroes.filter((item) => item.element === filter);
      }
    }
  );
    
  const filteredHeroes = useSelector(filteredHeroesSelector);

  const heroesLoadingStatus = useSelector((state) => state.heroes.heroesLoadingStatus);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchHeroes(request));
    // eslint-disable-next-line
  }, []);

  const handleDelete = useCallback(
    (id) => {
      request(`https://617ee0342ff7e600174bd939.mockapi.io//heroes/${id}`, "DELETE")
        .then(console.log(`delete element ${id}`))
        .then(dispatch(heroDelete(id)))
        .catch((e) => console.log(e));
    },
    // eslint-disable-next-line
    [request]
  );

  if (heroesLoadingStatus) {
    return <Spinner />;
  } else if (heroesLoadingStatus) {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return arr.map(({ id, ...props }) => {
      return (
        <HeroesListItem
          key={id}
          {...props}
          deleteItem={() => handleDelete(id)}
        />
      );
    });
  };

  const elements = renderHeroesList(filteredHeroes);
  return <ul>{elements}</ul>;
};

export default HeroesList;
