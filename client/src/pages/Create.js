import "./Create.css";
// ============================ Import Components
import CreateTask from "./CreateTask";
import CreateReminder from "./CreateReminder";
// ============================ Import Requirements
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

export default function Create({ isLogin }) {
  return (
    <Switch>
      <Route path="/create/:taskId">
        <CreateTask />
      </Route>
      <Route path="/create">
        <CreateReminder />
      </Route>
    </Switch>
  );
}
