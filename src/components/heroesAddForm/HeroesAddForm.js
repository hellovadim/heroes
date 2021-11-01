import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { createHero } from "../../actions/actionsHeroes";
import { useDispatch, useSelector } from "react-redux";

import { useHttp } from "../../hooks/http.hook";

const HeroesAddForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [element, setElement] = useState("");

  const { filters, filtersLoadingStatus } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmit = (event) => {
    event.preventDefault();
    const newHero = {
      id: uuidv4(),
      name,
      description,
      element,
    };

    request("https://617ee0342ff7e600174bd939.mockapi.io//heroes", "POST", JSON.stringify(newHero))
      .then(dispatch(createHero(newHero)))
      .catch((error) => console.log(error))
      .finally(setName(" "), setDescription(" "), setElement(" "));
  };
  const renderFilters = (filters, status) => {
    if (status === "loading") {
      return <option>Загрузка элементов</option>;
    } else if (status === "error") {
      return <option>Ошибка загрузки</option>;
    }

    if (filters && filters.length > 0) {
      return filters.map(({ name, label }) => {
        // Один из фильтров нам тут не нужен
        // eslint-disable-next-line
        if (name === "all") return;

        return (
          <option key={name} value={name}>
            {label}
          </option>
        );
      });
    }
  };

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          value={name}
          placeholder="Как меня зовут?"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          name="text"
          className="form-control"
          id="text"
          value={description}
          placeholder="Что я умею?"
          style={{ height: "130px" }}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          required
          className="form-select"
          id="element"
          name="element"
          value={element}
          onChange={(e) => setElement(e.target.value)}
        >
          <option>Я владею элементом...</option>
          <option value="">Я владею элементом...</option>
          {renderFilters(filters, filtersLoadingStatus)}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
