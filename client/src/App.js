import "./App.css";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
/* =========================== Import Pages*/
import Home from "./pages/Home";
import Account from "./pages/Account";
import Imprint from "./pages/Imprint";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PasswordReset from "./pages/PasswordReset";
import CreateCase from "./pages/CreateCase";
import CreateAction from "./pages/CreateAction";
/* =========================== Import Requirements */
import { Switch, Route, Redirect } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/create/:number">
          <CreateAction />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/create">
          <CreateCase />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/overview/:action/:another">
          <main>Hello Single Page</main>
          <BottomNav hasSpeech={true} />
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
          <Imprint />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/password-reset">
          <PasswordReset />
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
