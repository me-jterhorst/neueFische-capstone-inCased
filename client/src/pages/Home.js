// ======================= Import Components
import Searchfield from "../components/Searchfield";
import Greeting from "../components/Greeting";
// ======================= Import Requirements
import { useEffect } from "react";

export default function Home({
  name,
  isLogin,
  searchquery,
  onSearchSubmit,
  onSearchChange,
  updateUser,
}) {
  // Add reminder
  useEffect(() => {
    const existingUserData = JSON.parse(localStorage.getItem("user"));
    const temporaryReminder =
      JSON.parse(localStorage.getItem("reminder")) || null;

    if (temporaryReminder) {
      localStorage.removeItem("reminder");
      existingUserData.reminders.push(temporaryReminder);

      updateUser(existingUserData);
    }
  }, [searchquery, updateUser]);

  return (
    <main id="home">
      <Searchfield
        inputValue={searchquery}
        onSubmit={onSearchSubmit}
        onChange={onSearchChange}
      />
      <Greeting firstname={name} isLogin={isLogin} />
    </main>
  );
}
