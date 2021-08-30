import "./Create.css";
// ============================ Import Components
import CreateTask from "./CreateTask";
import CreateReminder from "./CreateReminder";
// ============================ Import Requirements
import { useState, useEffect, useCallback } from "react";
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

  useEffect(() => {
    console.log(reminder);
  }, [reminder, task]);

  function addTask(reminder) {
    reminder.tasks.push(task);
  }

  return (
    <Switch>
      <Route path="/create/:taskId">
        <CreateTask
          handleTask={getTask}
          currentReminder={reminder}
          addTask={addTask}
        />
      </Route>
      <Route path="/create">
        <CreateReminder
          handleReminder={getReminder}
          currentReminder={reminder}
        />
      </Route>
    </Switch>
  );
}
