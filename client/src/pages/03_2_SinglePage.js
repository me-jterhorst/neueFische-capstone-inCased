import "./SinglePage.css";
// ============================== import components
import Card from "../components/Card";
import CardOverviewHeader from "../components/Card_components/CardOverviewHeader";
import { ReactComponent as DeleteIcon } from "../svg/icons/icon-delete.svg";
// ============================== import requirements
import { useParams } from "react-router-dom";

export default function SinglePage({ globalReminders, deleteTask }) {
  const { reminderId, postId } = useParams();
  const singleReminder = globalReminders.filter(
    (reminder) => reminder.reminderId === reminderId
  );
  const currentReminder = singleReminder[0];
  const currentTask = currentReminder.tasks[postId];

  return (
    <main id='SinglePage' className='card-screen dispFlex'>
      <Card>
        <CardOverviewHeader
          postId={postId}
          currentReminder={currentReminder}
          reminderId={reminderId}
        />

        <div className='Card__content'>
          <article className='caseArea'>
            <h2>{currentReminder.trigger} </h2>
            <h2>{currentReminder.triggerEvent} </h2>
          </article>
          <article className='actionArea'>
            <h3>{currentTask.verb}</h3>
            <h2>{currentTask.action}</h2>
            {currentTask.with && <h3>{`with: ${currentTask.with}`}</h3>}
          </article>
        </div>
        <footer className='Card__footer dispFlex'>
          <button onClick={() => deleteTask(postId, reminderId)}>
            <DeleteIcon className='lineIcon icon opaque' />
          </button>
        </footer>
      </Card>
    </main>
  );
}
