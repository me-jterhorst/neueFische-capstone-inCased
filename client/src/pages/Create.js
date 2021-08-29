import "./Create.css";
// ============================ Import Components
import CreateTask from "./CreateTask";
import CreateReminder from "./CreateReminder";
// ============================ Import Requirements
// import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

export default function Create({ isLogin, supportsSpeech }) {
  return (
    <Switch>
      <Route path="/create/:taskId">
        <CreateTask supportsSpeech={supportsSpeech} />
      </Route>
      <Route path="/create">
        <CreateReminder supportsSpeech={supportsSpeech} />
      </Route>
    </Switch>
  );
}
