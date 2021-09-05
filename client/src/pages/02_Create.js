import "./Create.css";
// ============================== import components
import CreateTask from "./02_2_CreateTask";
import CreateReminder from "./02_1_CreateReminder";
// ============================== import requirements
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

export default function Create({ isLogin, updateUser }) {
  const history = useHistory();
  const [reminder, setReminder] = useState(null);
  const [storedReminder, setStoreReminder] = useState(null);
  const [pageId, setPageId] = useState(0);

  // ================ UBIQUOUS
  function goForward() {
    setPageId(pageId + 1);
    history.push(`/create/${pageId + 1}`);
  }

  useEffect(() => {
    if (storedReminder) {
      const user = JSON.parse(localStorage.getItem("user"));
      user.reminders.push(storedReminder);
      updateUser(user);
      history.push("/");
    }
  }, [storedReminder, updateUser, history]);

  // =============== Reminder
  function goBackwardReminder(event) {
    event.preventDefault();
  }

  function submitReminder(reminder) {
    setReminder(reminder);
  }

  // ================ Task

  function goBackwardTask(event) {
    event.preventDefault();
    if (pageId === 0) {
      history.push("/create");
    } else {
      setPageId(pageId - 1);
      history.push(`/create/${pageId - 1}`);
    }
  }
  // Add Task object to the Reminder object
  function submitTask(singleTask) {
    const storedReminder = JSON.parse(JSON.stringify(reminder));
    storedReminder.tasks[pageId] = singleTask;
    setReminder(storedReminder);
  }

  // ================== Save fully constructed reminder to user data
  function storeReminder(singleTask) {
    const storedReminder = JSON.parse(JSON.stringify(reminder));
    storedReminder.tasks[pageId] = singleTask;
    setStoreReminder(storedReminder);
  }

  return (
    isLogin && (
      <Switch>
        <Route path='/create/:taskId'>
          <CreateTask
            goForward={goForward}
            goBackward={goBackwardTask}
            submitTask={submitTask}
            reminder={reminder}
            storeReminder={storeReminder}
          />
        </Route>
        <Route path='/create'>
          <CreateReminder
            submitReminder={submitReminder}
            goBackward={goBackwardReminder}
            reminder={reminder}
          />
        </Route>
      </Switch>
    )
  );
}
