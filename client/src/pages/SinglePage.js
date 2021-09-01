import "./SinglePage.css";
// import components
import Card from "../components/Card";
// import requirements
import { useParams, useHistory } from "react-router-dom";

export default function SinglePage({ userReminders }) {
  const { reminderId } = useParams();
  const { postId } = useParams();
  const currentReminder = userReminders[reminderId];
  const currentTask = currentReminder.tasks[postId];
  const history = useHistory();

  return (
    <main id="SinglePage" className="card-screen dispFlex">
      <Card isLight={true}>
        <article className="caseArea">
          <h2>{currentReminder.trigger} </h2>
          <h2>{currentReminder.triggerEvent} </h2>
        </article>
        <article className="actionArea">
          <h3>{currentTask.verb}</h3>
          <h2>{currentTask.action}</h2>
          {currentTask.with && <h3>{`with: ${currentTask.with}`}</h3>}
        </article>
      </Card>
    </main>
  );
}
