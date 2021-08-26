import Searchfield from "../components/Searchfield";
import Greeting from "../components/Greeting";
import { useEffect, useState } from "react";

export default function Home({ name, isLogin, searchquery, onSubmit }) {
  const [searchInput, setSearchInput] = useState(searchquery);

  useEffect(() => {
    setSearchInput(searchquery);
  }, [searchquery]);

  function onSearch(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }

  /** UPDATE USER*/
  useEffect(() => {
    const existingUserData = JSON.parse(localStorage.getItem("user"));
    const storedReminder = JSON.parse(localStorage.getItem("reminder"));

    if (storedReminder) {
      localStorage.removeItem("reminder");
      localStorage.removeItem("user");

      existingUserData.reminders.push(storedReminder);

      localStorage.setItem("user", JSON.stringify(existingUserData));
    }
  }, []);

  return (
    <main id="home">
      <Searchfield
        inputValue={searchInput}
        onSubmit={onSubmit}
        onChange={onSearch}
      />
      <Greeting firstname={name} isLogin={isLogin} />
    </main>
  );
}
