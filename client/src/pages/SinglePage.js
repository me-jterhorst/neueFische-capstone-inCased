import "./SinglePage.css";
import Card from "../components/Card";
import FooterAccountDelete from "../components/Card_components/FooterAccountDelete";
import HeaderReviewGoForward from "../components/Card_components/HeaderReviewGoForward";
import { useParams } from "react-router-dom";

export default function Account({ isLight }) {
  const { reminderId } = useParams();
  const { taskId } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const reminderList = user.reminders;

  const specificReminder = reminderList.filter(
    (item) => item.reminderId === reminderId
  );

  const trigger = specificReminder[0].trigger;
  const triggerEvent = specificReminder[0].triggerEvent;
  const verb = specificReminder[0].tasks[taskId].verb;
  const action = specificReminder[0].tasks[taskId].action;
  const optinalParty = specificReminder[0].tasks[taskId].with;

  return (
    <main id="SinglePage" className="card-screen dispFlex">
      <Card
        header={
          <HeaderReviewGoForward
            currentReminder={reminderId}
            currentItem={Number(taskId)}
            totalItems={specificReminder[0].tasks.length}
          />
        }
        footer={<FooterAccountDelete />}
        isLight={isLight}
      >
        <article className="caseArea">
          <h2>{trigger} </h2>
          <h2>{triggerEvent} </h2>
        </article>
        <article className="actionArea">
          <h3>{verb}</h3>
          <h2>{action}</h2>
          {optinalParty && <h3>{`with: ${optinalParty}`}</h3>}
        </article>
      </Card>
    </main>
  );
}
