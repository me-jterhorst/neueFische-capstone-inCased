// ============================== import components
import BottomNav from "./components/Nav_components/BottomNav";
import Header from "./components/Nav_components/Header";
// ============================== import pages
import Home from "./pages/01_Home";
import Create from "./pages/02_Create";
import Overview from "./pages/03_Overview";
import Darkmode from "./pages/04_Darkmode";
import Imprint from "./pages/06_Imprint";
import Account from "./pages/05_Account";
import Login from "./pages/07_Login";
// ============================== import requirements
import { Switch, Route, Redirect, useHistory, useLocation } from "react-router";
import { useState, useEffect, useCallback } from "react";

export default function App() {
  const history = useHistory();
  const location = useLocation();
  const [isLogin, setLogin] = useState(true);
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
  const [searchInput, setSearchInput] = useState("");
  const [disable, setDisable] = useState(false);
  const [lightness, setLightness] = useState(
    JSON.parse(localStorage.getItem("lightness")) || 100
  );

  const [darkness, setDarkness] = useState(
    JSON.parse(localStorage.getItem("darkness")) || 100
  );

  // =============== USER
  function updateUser(user) {
    setUser(user);
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // =============== SPEECH
  let supportsSpeech, SpeechRecognition, recognition;

  if (!window.webkitSpeechRecognition) {
    supportsSpeech = false;
  } else {
    supportsSpeech = true;
    SpeechRecognition = window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
  }

  // =============== SEARCH HANDLERS
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

  // =============== DELETE FUNCTIONS
  function deleteTask(postId, reminderId) {
    const userWithoutTask = user.reminders.filter(
      (reminder) => reminder.reminderId === reminderId
    );
    userWithoutTask[0].tasks.splice(postId, 1);

    localStorage.setItem("user", JSON.stringify(userWithoutTask));

    if (postId > 0) {
      history.push(`/overview/${reminderId}/${Number(postId - 1)}`);
    } else {
      history.push("/overview");
    }
  }
  function deleteReminder(reminderId) {
    const indexOfReminder = user.reminders.findIndex(
      (reminder) => reminder.reminderId === reminderId
    );

    const userWithoutReminder = user;
    userWithoutReminder.reminders.splice(indexOfReminder, 1);

    localStorage.setItem("user", JSON.stringify(userWithoutReminder));

    history.push("/overview");
  }

  // =============== DARKMODE
  function handleLightness(event) {
    setLightness(event.target.value);
  }
  function handleWhite(event) {
    setDarkness(event.target.value);
  }
  const setDarkestblack = useCallback(() => {
    document.documentElement.style.setProperty("--lightness", `${lightness}%`);
    localStorage.setItem("lightness", JSON.stringify(lightness));
  }, [lightness]);

  const setWhitestWhite = useCallback(() => {
    document.documentElement.style.setProperty("--darkness", `${darkness}%`);
    localStorage.setItem("darkness", JSON.stringify(darkness));
  }, [darkness]);

  useEffect(() => {
    setDarkestblack();
  }, [setDarkestblack, lightness]);

  useEffect(() => {
    setWhitestWhite();
  }, [setWhitestWhite, darkness]);

  return (
    <>
      <Header isLogin={isLogin} toggleLogin={() => setLogin(!isLogin)} />

      <Switch>
        <Route path='/logout'>
          <Redirect to='/' />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/imprint'>
          <Imprint />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path='/account'>
          <Account isLight={true} />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path='/darkmode'>
          <Darkmode
            lightness={lightness}
            darkness={darkness}
            handleWhite={handleWhite}
            handleLightness={handleLightness}
          />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path='/overview'>
          <Overview
            searchquery={searchInput}
            onSearch={onSearchChange}
            onSubmit={onSearchSubmit}
            userReminders={user.reminders}
            disable={disable}
            handleSpeech={onSearchSpeech}
            hasSpeech={supportsSpeech}
            deleteTask={deleteTask}
            deleteReminder={deleteReminder}
          />
        </Route>

        <Route path='/create'>
          <Create isLogin={isLogin} updateUser={updateUser} />
          <BottomNav hasSpeech={false} />
        </Route>

        <Route path='/'>
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

        <Route path='/*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </>
  );
}
