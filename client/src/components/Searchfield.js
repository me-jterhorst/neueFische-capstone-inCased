import "./Searchfield.css";
import { ReactComponent as SearchIcon } from "../svg/icon-search.svg";
// import { useState } from "react";

export default function Searchfield({ inputValue, onSubmit }) {
  // const [search, setSearch] = useState("");

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="Searchfield dispFlex"
    >
      <button className="Searchfield__button">
        <SearchIcon />
      </button>
      <input
        type="text"
        name="searchfield__input"
        id="searchfield__input"
        className="Searchfield__input"
        // onChange={(event) => setSearch(event.target.value)}
        // value={search}
        onChange={onSubmit}
        value={inputValue}
      />
    </form>
  );
}
