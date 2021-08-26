import "./Searchfield.css";
import { ReactComponent as SearchIcon } from "../svg/icon-search.svg";

export default function Searchfield({ inputValue, onSubmit }) {
  // const [search, setSearch] = useState("");

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="Searchfield dispFlex"
    >
      <div className="Searchfield__button">
        <SearchIcon />
      </div>
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
