import "./Overview.css";
// ======================= import components

import Searchfield from "../components/Searchfield";
import BottomNav from "../components/BottomNav";
// ======================= import pages
import ListPage from "./ListPage";
import SinglePage from "./SinglePage";
// ======================== import requirements
import { Switch, Route } from "react-router-dom";
// import { useState } from "react";

export default function Overview({
  searchquery,
  onSubmit,
  onSearch,
  userReminders,
}) {
  return (
    <Switch>
      <Route path="/overview/task/:reminderId/:postId">
        <SinglePage />
        <BottomNav hasSpeech={false} />
      </Route>

      <Route exact path="/overview">
        <main id="Overview">
          <Searchfield
            inputValue={searchquery}
            onSubmit={onSubmit}
            onChange={onSearch}
          />
          <ListPage inputValue={searchquery} userReminders={userReminders} />
        </main>
      </Route>
    </Switch>
  );
}
