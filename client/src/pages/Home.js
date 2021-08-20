import Searchfield from "../components/Searchfield";
import Greeting from "../components/Greeting";

export default function Home({ name, isLogin }) {
  return (
    <main id="home">
      <Searchfield />
      <Greeting firstname={name} isLogin={isLogin} />
    </main>
  );
}
