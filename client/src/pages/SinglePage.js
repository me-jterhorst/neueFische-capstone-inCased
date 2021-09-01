import "./SinglePage.css";
// import components
import Card from "../components/Card";
// import requirements
import { useParams } from "react-router-dom";

// to be moved
import { Link, useHistory } from "react-router-dom";

export default function SinglePage({ reminders, userReminders }) {
  const { reminderId } = useParams();
  const { postId } = useParams();
  const currentReminder = reminders[reminderId];
  const currentTask = currentReminder.tasks[postId];
  // ========================= to be moved
  const history = useHistory();
  // ========================= to be moved
  return (
    <main id="SinglePage" className="card-screen dispFlex">
      <Card isLight={true}>
        <header>
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            Backward
          </button>
          {`${+postId + 1}/ ${currentReminder.tasks.length}`}
          <Link
            to={`/overview/${reminderId}/${Number(postId) + 1}`}
            // onClick={() => {
            //   history.goForward();
            // history.push(`/overview/${reminderId}/${Number(postId) + 1} `);
            // }}
          >
            Forward
          </Link>
        </header>
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
