// ============================== import components
import Searchfield from "../components/Search_components/Searchfield";
import Greeting from "../components/Greeting";

export default function Home({
  name,
  isLogin,
  searchquery,
  onSearchSubmit,
  onSearchChange,
  updateUser,
}) {
  return (
    <main id='home'>
      <Searchfield
        inputValue={searchquery}
        onSubmit={onSearchSubmit}
        onChange={onSearchChange}
      />
      <Greeting firstname={name} isLogin={isLogin} />
    </main>
  );
}
