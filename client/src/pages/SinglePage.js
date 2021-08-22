import "./SinglePage.css";
import Card from "../components/Card";
import FooterAccountDelete from "../components/Card_components/FooterAccountDelete";
import HeaderGoForward from "../components/Card_components/HeaderGoForward";
import SpeechInput from "../components/SpeechInput";
import { useParams } from "react-router-dom";
export default function Account({ reminderList, isLight }) {
  const { reminderId } = useParams();
  const { taskId } = useParams();

  const specificReminder = reminderList.filter(
    (item) => item.reminderId === Number(reminderId)
  );
  return (
    <main id="SinglePage" className="card-screen">
      <Card
        header={
          <HeaderGoForward totalItems={specificReminder[0].tasks.length} />
        }
        footer={<FooterAccountDelete />}
        isLight={isLight}
      >
        <h3>{specificReminder[0].tasks[taskId].action}</h3>
        <form className="Account__form dispFlex">
          <SpeechInput identifier={"action"} label="[ Event ]" />
          <SpeechInput identifier={"action"} label="[ Verb ]" />
          <SpeechInput identifier={"action"} label="[ Action ]" />
          <SpeechInput identifier={"action"} label="[ With ]" />
        </form>
      </Card>
    </main>
  );
}
