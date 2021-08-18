import "./App.css";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
/* =========================== Import Pages*/
import Home from "./pages/Home";
import Account from "./pages/Account";
/* =========================== Import Requirements */
import { Switch, Route, Redirect } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/create">
          <main>Hello Create</main>
          <BottomNav hasSpeech={false} />
        </Route>
        <Route path="/overview">
          <main>Hello Overview</main>
          <BottomNav hasSpeech={true} />
        </Route>
        <Route path="/darkmode">
          <main>Hello Darkmode</main>
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/account">
          <Account isLight={true} />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/imprint">
          <main>Hello Imprint</main>
        </Route>
        <Route path="/login">
          <main>Hello Login</main>
        </Route>
        <Route path="/">
          <Home />
          <BottomNav hasSpeech={true} />
        </Route>
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}
