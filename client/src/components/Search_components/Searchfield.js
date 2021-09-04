import "./Searchfield.css";
import { ReactComponent as SearchIcon } from "../../svg/icons/icon-search.svg";

export default function Searchfield({ inputValue, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit} className='Searchfield dispFlex'>
      <button className='Searchfield__button'>
        <SearchIcon />
      </button>
      <input
        type='text'
        name='searchfield__input'
        id='searchfield__input'
        className='Searchfield__input'
        onChange={onChange}
        value={inputValue}
      />
    </form>
  );
}
