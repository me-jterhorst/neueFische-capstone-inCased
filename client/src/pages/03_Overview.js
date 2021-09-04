import "./Overview.css";
// ============================== import components
import Searchfield from "../components/Search_components/Searchfield";
import BottomNav from "../components/Nav_components/BottomNav";
// ============================== import pages
import ListPage from "./03_1_ListPage";
import SinglePage from "./03_2_SinglePage";
// ============================== import requirements
import { Switch, Route } from "react-router-dom";

export default function Overview({
  searchquery,
  onSubmit,
  onSearch,
  userReminders,
  disable,
  handleSpeech,
  hasSpeech,
  deleteTask,
  deleteReminder,
}) {
  return (
    <Switch>
      <Route path='/overview/:reminderId/:postId'>
        <SinglePage globalReminders={userReminders} deleteTask={deleteTask} />
        <BottomNav hasSpeech={false} />
      </Route>

      <Route exact path='/overview'>
        <main id='Overview'>
          <Searchfield
            inputValue={searchquery}
            onSubmit={onSubmit}
            onChange={onSearch}
          />
          <ListPage
            inputValue={searchquery}
            globalReminders={userReminders}
            deleteReminder={deleteReminder}
          />
        </main>
        <BottomNav
          hasSpeech={hasSpeech}
          disable={disable}
          handleSpeech={handleSpeech}
        />
      </Route>
    </Switch>
  );
}
