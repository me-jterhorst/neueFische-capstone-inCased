import "./Searchfield.css";
import { ReactComponent as SearchIcon } from "../svg/icon-search.svg";

export default function Searchfield() {
  return (
    <form className='searchfield dispFlex'>
      <button type='submit' className='searchfield-button'>
        <SearchIcon />
      </button>
      <input
        type='text'
        name='searchfield-input'
        id='searchfield-input'
        className='searchfield-input'
      />
    </form>
  );
}
