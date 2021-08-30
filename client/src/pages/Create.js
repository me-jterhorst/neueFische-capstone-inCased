import "./Create.css";
// ============================ Import Components
import CreateTask from "./CreateTask";
import CreateReminder from "./CreateReminder";
// ============================ Import Requirements
import { useState, useCallback } from "react";
import { Switch, Route } from "react-router-dom";

export default function Create({ isLogin }) {
  const [reminder, setReminder] = useState({});
  const [task, setTask] = useState({});

  const getReminder = useCallback((reminder) => {
    setReminder(reminder);
  }, []);

  const getTask = useCallback((task) => {
    setTask(task);
  }, []);

  console.group("create");
  console.log(task);
  console.log(reminder);
  console.groupEnd();
  return (
    <Switch>
      <Route path="/create/:taskId">
        <CreateTask handleTask={getTask} />
      </Route>
      <Route path="/create">
        <CreateReminder handleReminder={getReminder} />
      </Route>
    </Switch>
  );
}
