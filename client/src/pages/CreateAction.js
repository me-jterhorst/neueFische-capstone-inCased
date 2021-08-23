import "./CreateAction.css";
import Card from "../components/Card";
import HeaderActionGoForward from "../components/Card_components/HeaderActionGoForward";
import SpeechInput from "../components/SpeechInput";
import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
import FooterSubmit from "../components/Card_components/FooterSubmit";

export default function CreateCase() {
  const { number } = useParams();
  const history = useHistory();
  const [verbInput, setVerbInput] = useState("");
  const [actionInput, setActionInput] = useState("");
  const [withInput, setWithInput] = useState("");
  const [isTooShort, setIsTooShort] = useState(true);

  useEffect(() => {
    verbInput.length === 0 ? setIsTooShort(true) : setIsTooShort(false);
    actionInput.length === 0 ? setIsTooShort(true) : setIsTooShort(false);
  }, [verbInput, actionInput, isTooShort]);

  function caseAddGoForward(event) {
    event.preventDefault();

    if (isTooShort) {
      return;
    }

    const taskObj = {
      taskId: Number(number),
      verb: verbInput,
      action: actionInput,
      with: withInput,
    };

    const reminderArray = JSON.parse(localStorage.getItem("newEntry"));
    reminderArray.tasks.push(taskObj);

    localStorage.clear();
    localStorage.setItem("newEntry", JSON.stringify(reminderArray));
    // How to reset form
    // useRef???
    history.push(`/create/${Number(number) + 1}`);
  }

  return (
    <main id="CreateAction" className="card-screen">
      <Card
        header={
          <HeaderActionGoForward
            clickAddForward={(event) => caseAddGoForward(event)}
            clickForward={() => console.log("forward")}
            clickBackward={() => console.log("backwards")}
            currentItem={Number(number)}
            totalItems={Number(number) + 1}
          />
        }
        footer={<FooterSubmit text="Add Reminder" />}
      >
        <h2 className="margin-b--s">Do this</h2>
        <form className="dispFlex margin-b--l">
          <SpeechInput
            onChange={(event) => setVerbInput(event.target.value)}
            label="Verb"
          />
          <SpeechInput
            onChange={(event) => setActionInput(event.target.value)}
            label="Action"
          />
          <SpeechInput
            onChange={(event) => setWithInput(event.target.value)}
            label="With"
            isRequired={false}
          />
        </form>
      </Card>
    </main>
  );
}
