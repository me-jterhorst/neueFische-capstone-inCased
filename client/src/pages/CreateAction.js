import "./CreateAction.css";
import Card from "../components/Card";
import HeaderActionGoForward from "../components/Card_components/HeaderActionGoForward";
import SpeechInput from "../components/SpeechInput";
import { useParams, useHistory } from "react-router";
import { useState, useEffect } from "react";
import FooterSubmit from "../components/Card_components/FooterSubmit";

export default function CreateCase() {
  /** VARIABLE SET UP */
  const reminderArray = JSON.parse(localStorage.getItem("newEntry"));
  const { number } = useParams();
  const history = useHistory();
  const [verbInput, setVerbInput] = useState(
    reminderArray.tasks[Number(number) - 1].verb
  );
  const [actionInput, setActionInput] = useState(
    reminderArray.tasks[Number(number) - 1].action
  );
  const [withInput, setWithInput] = useState(
    reminderArray.tasks[Number(number) - 1].with
  );
  const [isTooShort, setIsTooShort] = useState(true);

  /** CHECK FOR INPUT */
  useEffect(() => {
    verbInput.length === 0 ? setIsTooShort(true) : setIsTooShort(false);
    actionInput.length === 0 ? setIsTooShort(true) : setIsTooShort(false);
  }, [verbInput, actionInput, isTooShort]);

  /** ONCLICK ADD NEW TASK */
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

    reminderArray.tasks[Number(number) - 1] = taskObj;
    reminderArray.tasks.push({
      taskId: Number(number) + 1,
      verb: "",
      action: "",
      with: "",
    });

    localStorage.clear();
    localStorage.setItem("newEntry", JSON.stringify(reminderArray));
    setVerbInput("");
    setActionInput("");
    setWithInput("");

    history.push(`/create/${Number(number) + 1}`);
  }

  /** ONCLICK GO BACK  */
  function actionHandleGoBack(event) {
    event.preventDefault();
    if (Number(number) > 1) {
      setVerbInput(reminderArray.tasks[Number(number) - 2].verb);
      setActionInput(reminderArray.tasks[Number(number) - 2].action);
      setWithInput(reminderArray.tasks[Number(number) - 2].with);
    }
    history.push(`/create/${Number(number) - 1}`);
  }

  function goForward() {
    setVerbInput(reminderArray.tasks[Number(number)].verb);
    setActionInput(reminderArray.tasks[Number(number)].action);
    setWithInput(reminderArray.tasks[Number(number)].with);

    history.push(`/create/${Number(number) + 1}`);
  }

  return (
    <main id="CreateAction" className="card-screen">
      <Card
        header={
          <HeaderActionGoForward
            clickAddForward={(event) => caseAddGoForward(event)}
            clickForward={() => goForward()}
            clickBackward={(event) => actionHandleGoBack(event)}
            currentItem={Number(number)}
            totalItems={reminderArray ? reminderArray.tasks.length : 2}
          />
        }
        footer={<FooterSubmit text="Add Reminder" />}
      >
        <h2 className="margin-b--s">Do this</h2>
        <form className="dispFlex margin-b--l">
          <SpeechInput
            onChange={(event) => setVerbInput(event.target.value)}
            label="Verb"
            value={verbInput}
          />
          <SpeechInput
            onChange={(event) => setActionInput(event.target.value)}
            label="Action"
            value={actionInput}
          />
          <SpeechInput
            onChange={(event) => setWithInput(event.target.value)}
            label="With"
            value={withInput}
            isRequired={false}
          />
        </form>
        {isTooShort && <p>Required Input fields can't be empty</p>}
      </Card>
    </main>
  );
}
