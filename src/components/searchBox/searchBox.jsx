import css from "./searchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const filter = useSelector((state) => selectNameFilter(state));

  const dispatch = useDispatch();

  function onSearch(event) {
    dispatch(changeFilter(String(event.target.value)));
  }
  return (
    <div className={css.findBox}>
      <label>Find contacts by name</label>
      <input type="text" onChange={onSearch} />
    </div>
  );
}
