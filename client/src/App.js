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
import { Switch, Route, Redirect, useHistory } from "react-router";
import { useState } from "react";

export default function App() {
  const [isLogin, setLogin] = useState(true);
  const [searchInputText, setSearchInputText] = useState("");
  const history = useHistory();
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

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

  function handleSpeech() {
    recognition.start();

    recognition.onresult = (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      setSearchInputText(transcript.slice(0, -1));
    };

    recognition.onend = () => {
      history.replace("/overview");
    };
  }

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
          <Overview searchquery={searchInputText} />
          <BottomNav handleSpeech={handleSpeech} hasSpeech={true} />
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
          <Home
            isLogin={isLogin}
            searchquery={searchInputText}
            name={userData.user.name}
          />
          <BottomNav handleSpeech={handleSpeech} hasSpeech={true} />
        </Route>

        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}
