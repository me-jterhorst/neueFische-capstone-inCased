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
import Create from "./pages/Create";
import SinglePage from "./pages/SinglePage";
import Overview from "./pages/Overview";
/* =========================== Import Requirements */
import { Switch, Route, Redirect, useHistory, useLocation } from "react-router";
import { useState } from "react";

export default function App() {
  const history = useHistory();
  const location = useLocation();
  const database = JSON.parse(localStorage.getItem("user")) || null;
  const userData = {};
  const [isLogin, setLogin] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [disable, setDisable] = useState(false);
  const [constructReminder, setConstructReminder] = useState([]);

  // ================== SPEECH

  let supportsSpeech, SpeechRecognition, recognition;

  if (!window.webkitSpeechRecognition) {
    supportsSpeech = false;
  } else {
    supportsSpeech = true;
    SpeechRecognition = window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
  }

  // ================ Database
  if (!database) {
    const serverUser = {
      id: 1,
      user: {
        name: "Jane",
        email: "JaneDoe@hotmail.de",
        password: 12345678,
      },
      reminders: constructReminder,
    };

    localStorage.setItem("user", JSON.stringify(serverUser));

    userData.id = 1;
    userData.user = {
      name: "Jakob",
      email: "mail.de",
      password: 1223232,
    };
    userData.reminders = [];
  } else {
    userData.id = database.id;
    userData.user = {
      name: database.user.name,
      email: database.user.email,
      password: 12345678,
    };
    userData.reminders = [...database.reminders];
  }

  // ============== SEARCH HANDLERS
  function onSearchSpeech(event) {
    event.preventDefault();
    recognition.start();

    recognition.onstart = () => {
      setDisable(true);
    };
    recognition.onresult = (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      setSearchInput(transcript.slice(0, -1));
    };

    recognition.onend = () => {
      setDisable(false);
      history.push("/overview");
    };
  }
  function onSearchSubmit(event) {
    event.preventDefault();
    const currentLocation = location.pathname;
    currentLocation === "/" && history.push("/overview");
  }
  function onSearchChange(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }

  return (
    <>
      <Header isLogin={isLogin} toggleLogin={() => setLogin(!isLogin)} />
      <Switch>
        <Route path="/create">
          <Create isLogin={isLogin} supportsSpeech={supportsSpeech} />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/overview/task/:reminderId/:taskId">
          <SinglePage isLight={true} />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/overview">
          <Overview
            searchquery={searchInput}
            onSearch={onSearchChange}
            onSubmit={onSearchSubmit}
          />
          <BottomNav
            disable={disable}
            handleSpeech={onSearchSpeech}
            hasSpeech={supportsSpeech}
          />
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
            searchquery={searchInput}
            name={userData.user.name}
            onSearch={onSearchChange}
            onSubmit={onSearchSubmit}
          />
          <BottomNav
            disable={disable}
            handleSpeech={onSearchSpeech}
            hasSpeech={supportsSpeech}
          />
        </Route>

        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}
