import "./Searchfield.css";
import { ReactComponent as SearchIcon } from "../svg/icon-search.svg";

export default function Searchfield() {
  return (
    <form className="Searchfield dispFlex">
      <button type="submit" className="Searchfield__button">
        <SearchIcon />
      </button>
      <input
        type="text"
        name="searchfield__input"
        id="searchfield-input"
        className="Searchfield-input"
      />
    </form>
  );
}
