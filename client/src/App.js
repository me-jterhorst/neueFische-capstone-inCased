import "./App.css";
// ========================== Import Components
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
import Overview from "./pages/Overview";
/* =========================== Import Requirements */
import { Switch, Route, Redirect, useHistory, useLocation } from "react-router";
import { useState, useEffect } from "react";

export default function App() {
  const history = useHistory();
  const location = useLocation();
  const [isLogin, setLogin] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [disable, setDisable] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      id: 1,
      user: {
        name: "Jane",
        email: "JaneDoe@hotmail.de",
        password: 12345678,
      },
      reminders: [],
    }
  );

  // user
  function updateUser(user) {
    setUser(user);
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // ================== SPEECH
  let supportsSpeech, SpeechRecognition, recognition;

  if (!window.webkitSpeechRecognition) {
    supportsSpeech = false;
  } else {
    supportsSpeech = true;
    SpeechRecognition = window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
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
          <Create isLogin={isLogin} />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path="/overview">
          <Overview
            searchquery={searchInput}
            onSearch={onSearchChange}
            onSubmit={onSearchSubmit}
            userReminders={user.reminders}
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
            name={user.user.name}
            onSearchChange={onSearchChange}
            onSearchSubmit={onSearchSubmit}
            updateUser={updateUser}
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
