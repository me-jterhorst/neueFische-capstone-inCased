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
/* =========================== Import Requirements */
import { Switch, Route, Redirect } from "react-router";
import { useState } from "react";

export default function App() {
  const [isLogin, setLogin] = useState(true);

  const userData = {
    id: 1,
    user: {
      name: "Jane",
      email: "JaneDoe@hotmail.de",
      password: 12345678,
    },
    reminders: [
      {
        reminderId: 1,
        trigger: "Supermarket",
        creationTime: 12343434,
        tasks: [
          {
            taskId: 1,
            happening: "shopping",
            verb: "buy",
            action: "some milk",
            with: "Max",
          },
          {
            taskId: 2,
            happening: "shopping",
            verb: "buy",
            action: "some toiletpaper",
            with: "",
          },
          {
            taskId: 3,
            happening: "shooing",
            verb: "Ask for",
            action: "vegan icecream",
            with: "",
          },
        ],
      },
      {
        reminderId: 2,
        trigger: "Eric",
        creationTime: 12343434,
        tasks: [
          {
            taskId: 1,
            happening: "is Visiting",
            verb: "book",
            action: "restaurant table",
            with: "Anne",
          },
        ],
      },
      {
        reminderId: 1,
        trigger: "Joker",
        creationTime: 12343434,
        tasks: [
          {
            taskId: 1,
            happening: "is attacking Gotham",
            verb: "call",
            action: "Batman",
            with: "Comissioner Gordon",
          },
          {
            taskId: 2,
            happening: "breaks into Arkham",
            verb: "refuel",
            action: "the Batmobil",
            with: "Alfred",
          },
          {
            taskId: 3,
            happening: "is starting a gang war",
            verb: "Call",
            action: "Robin",
            with: "Robin",
          },
        ],
      },
    ],
  };
  return (
    <>
      <Header isLogin={isLogin} toggleLogin={() => setLogin(!isLogin)} />
      <Switch>
        <Route path="/create/:number">
          <CreateAction />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/create">
          <CreateCase />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/overview/task/:id">
          <SinglePage isLight={true} />
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
