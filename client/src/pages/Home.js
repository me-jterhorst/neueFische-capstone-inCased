import Searchfield from "../components/Searchfield";
import Greeting from "../components/Greeting";

export default function Home() {
  const user = "Jane";
  const isUserLoggedIn = true;

  return (
    <main id='home'>
      <Searchfield />
      <Greeting user={user} isUserLoggedIn={isUserLoggedIn} />
    </main>
  );
}
