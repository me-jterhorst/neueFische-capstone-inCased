import "./SinglePage.css";
import Card from "../components/Card";
import FooterAccountDelete from "../components/Card_components/FooterAccountDelete";
import HeaderGoForward from "../components/Card_components/HeaderGoForward";
import { useParams } from "react-router-dom";
export default function Account({ reminderList, isLight }) {
  const { reminderId } = useParams();
  const { taskId } = useParams();

  const specificReminder = reminderList.filter(
    (item) => item.reminderId === Number(reminderId)
  );

  console.log(specificReminder);
  return (
    <main id="SinglePage" className="card-screen dispFlex">
      <Card
        header={
          <HeaderGoForward totalItems={specificReminder[0].tasks.length} />
        }
        footer={<FooterAccountDelete />}
        isLight={isLight}
      >
        <article className="caseArea">
          <h2>{specificReminder[0].trigger} </h2>
          <h2>{specificReminder[0].triggerEvent} </h2>
        </article>
        <article className="actionArea">
          <h3>{specificReminder[0].tasks[taskId].verb}</h3>
          <h2>{specificReminder[0].tasks[taskId].action}</h2>
          <h3>{`with:  ${specificReminder[0].tasks[taskId].with}`}</h3>
        </article>
      </Card>
    </main>
  );
}
