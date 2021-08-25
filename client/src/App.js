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
import SinglePage from "./pages/SinglePage";
import Overview from "./pages/Overview";
/* =========================== Import Requirements */
import { Switch, Route, Redirect } from "react-router";
import { useState } from "react";

export default function App() {
  const [isLogin, setLogin] = useState(true);
  const serverUser = {
    id: 1,
    user: {
      name: "Jane",
      email: "JaneDoe@hotmail.de",
      password: 12345678,
    },
    reminders: [],
  };
  localStorage.setItem("user", JSON.stringify(serverUser));

  const database = JSON.parse(localStorage.getItem("user")) || null;

  const userData = {
    id: database.id,
    user: {
      name: database.user.name,
      email: database.user.email,
      password: 12345678,
    },
    reminders: [...database.reminders],
  };

  return (
    <>
      <Header isLogin={isLogin} toggleLogin={() => setLogin(!isLogin)} />
      <Switch>
        <Route path="/create/0">
          <CreateCase />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/create/:number">
          <CreateAction />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/overview/task/:reminderId/:taskId">
          <SinglePage isLight={true} />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/overview">
          <Overview />
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
        <Route path="/logout">
          <Redirect to="/" />
        </Route>
        <Route path="/">
          <Home isLogin={isLogin} name={userData.user.name} />
          <BottomNav hasSpeech={true} />
        </Route>

        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}
