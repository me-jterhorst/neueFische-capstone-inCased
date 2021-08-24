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
  const indexNumber = Number(number);
  const history = useHistory();
  const [verbInput, setVerbInput] = useState(
    reminderArray.tasks[indexNumber - 1].verb
  );
  const [actionInput, setActionInput] = useState(
    reminderArray.tasks[indexNumber - 1].action
  );
  const [withInput, setWithInput] = useState(
    reminderArray.tasks[indexNumber - 1].with
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
      taskId: indexNumber,
      verb: verbInput,
      action: actionInput,
      with: withInput,
    };

    reminderArray.tasks[indexNumber - 1] = taskObj;
    reminderArray.tasks.push({
      taskId: indexNumber + 1,
      verb: "",
      action: "",
      with: "",
    });

    localStorage.removeItem("newEntry");
    localStorage.setItem("newEntry", JSON.stringify(reminderArray));
    setVerbInput("");
    setActionInput("");
    setWithInput("");

    history.push(`/create/${indexNumber + 1}`);
  }

  /** ONCLICK GO BACK  */
  function actionHandleGoBack(event) {
    event.preventDefault();
    if (indexNumber > 1) {
      setVerbInput(reminderArray.tasks[indexNumber - 2].verb);
      setActionInput(reminderArray.tasks[indexNumber - 2].action);
      setWithInput(reminderArray.tasks[indexNumber - 2].with);
    }
    history.push(`/create/${indexNumber - 1}`);
  }
  /** ONCLICK GO FORWARD  */
  function goForward() {
    setVerbInput(reminderArray.tasks[indexNumber].verb);
    setActionInput(reminderArray.tasks[indexNumber].action);
    setWithInput(reminderArray.tasks[indexNumber].with);

    history.push(`/create/${indexNumber + 1}`);
  }

  function addReminder(event) {
    event.preventDefault();

    if (isTooShort) {
      return;
    }

    const taskObj = {
      taskId: indexNumber,
      verb: verbInput,
      action: actionInput,
      with: withInput,
    };

    reminderArray.tasks[indexNumber - 1] = taskObj;

    localStorage.removeItem("newEntry");
    localStorage.setItem("reminder", JSON.stringify(reminderArray));

    history.push("/");
  }

  return (
    <main id="CreateAction" className="card-screen">
      <Card
        header={
          <HeaderActionGoForward
            clickAddForward={(event) => caseAddGoForward(event)}
            clickForward={() => goForward()}
            clickBackward={(event) => actionHandleGoBack(event)}
            currentItem={indexNumber}
            totalItems={reminderArray ? reminderArray.tasks.length : 2}
          />
        }
        footer={
          indexNumber === reminderArray.tasks.length ? (
            <FooterSubmit
              onClick={(event) => addReminder(event)}
              text="Add Reminder"
            />
          ) : (
            ""
          )
        }
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
        {isTooShort && (
          <p className="Card__message--error">
            Required Input fields can't be empty
          </p>
        )}
      </Card>
    </main>
  );
}
