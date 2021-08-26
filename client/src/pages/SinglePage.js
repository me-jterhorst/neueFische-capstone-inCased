import "./SinglePage.css";
import Card from "../components/Card";
import FooterItemDelete from "../components/Card_components/FooterItemDelete";
import HeaderReviewGoForward from "../components/Card_components/HeaderReviewGoForward";
import HeaderGoBack from "../components/Card_components/HeaderGoBack";
import { useParams, useHistory } from "react-router-dom";

export default function SinglePage({ isLight }) {
  const { reminderId } = useParams();
  const { taskId } = useParams();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const reminderList = user.reminders;
  const specificReminder = reminderList.filter(
    (item) => item.reminderId === reminderId
  );

  if (specificReminder[0].tasks.length > 0) {
    const trigger = specificReminder[0].trigger;
    const triggerEvent = specificReminder[0].triggerEvent;
    const promptedTaskId = specificReminder[0].tasks[taskId].taskId;
    const verb = specificReminder[0].tasks[taskId].verb;
    const action = specificReminder[0].tasks[taskId].action;
    const optinalParty = specificReminder[0].tasks[taskId].with;

    function handleDelete() {
      const filteredTask = specificReminder[0].tasks.filter(
        (item) => item.taskId !== promptedTaskId
      );

      specificReminder[0].tasks = filteredTask;
      localStorage.setItem("user", JSON.stringify(user));
      if (taskId > 0) {
        history.push(`/overview/task/${reminderId}/${Number(taskId) - 1}`);
      } else {
        history.push("/overview");
      }
    }

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
          footer={<FooterItemDelete onClick={handleDelete} />}
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
  } else {
    return (
      <main id="SinglePage" className="card-screen dispFlex">
        <Card header={<HeaderGoBack />} footer={null} isLight={isLight}>
          <article className="caseArea">
            <h2>All my friends are gone</h2>
          </article>
        </Card>
      </main>
    );
  }
}
