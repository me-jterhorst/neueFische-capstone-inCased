import "./Create.css";
// ============================ Import Components
import CreateTask from "./CreateTask";
import CreateReminder from "./CreateReminder";
// ============================ Import Requirements
import { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

export default function Create({ isLogin, syncReminder }) {
  const history = useHistory();
  const [reminder, setReminder] = useState(null);
  const [pageId, setPageId] = useState(0);

  // ================ ALL
  function goForward() {
    setPageId(pageId + 1);
    history.push(`/create/${pageId + 1}`);
  }

  useEffect(() => {
    localStorage.setItem("newEntry", JSON.stringify(reminder));
  }, [reminder]);

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

  function submitTask(singleTask) {
    const storedReminder = JSON.parse(JSON.stringify(reminder));
    storedReminder.tasks[pageId] = singleTask;
    setReminder(storedReminder);
  }

  // ============ Final Step Submit

  // Click on Submit Button in Task Screen
  // run syncReminder with latest reminder
  // push final reminder to Array
  // setRemove the local Storage newEntry
  // set it to local storage reminder
  // history push

  return (
    <Switch>
      <Route path="/create/:taskId">
        <CreateTask
          goForward={goForward}
          goBackward={goBackwardTask}
          submitTask={submitTask}
          reminder={reminder}
        />
      </Route>
      <Route path="/create">
        <CreateReminder
          submitReminder={submitReminder}
          goBackward={goBackwardReminder}
          reminder={reminder}
        />
      </Route>
    </Switch>
  );
}
