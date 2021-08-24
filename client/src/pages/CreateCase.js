import "./CreateCase.css";
import Card from "../components/Card";
import HeaderCreateCaseGoForward from "../components/Card_components/HeaderCreateCaseGoForward";
import SpeechInput from "../components/SpeechInput";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

export default function CreateCase() {
  const history = useHistory();
  const reminderArray = JSON.parse(localStorage.getItem("newEntry")) || {
    tasks: [],
  };
  const [triggerInput, setTriggerInput] = useState(
    reminderArray.tasks.length === 0 ? "" : reminderArray.trigger
  );
  const [eventTriggerInput, setEventTriggerInput] = useState(
    reminderArray.tasks.length === 0 ? "" : reminderArray.triggerEvent
  );
  const [isTooShort, setIsTooShort] = useState(true);

  function caseHandleGoBack() {
    localStorage.removeItem("NewEntry");
    history.push("/");
  }

  useEffect(() => {
    triggerInput.length === 0 ? setIsTooShort(true) : setIsTooShort(false);
    eventTriggerInput.length === 0 ? setIsTooShort(true) : setIsTooShort(false);
  }, [triggerInput, eventTriggerInput, isTooShort]);

  function caseHandleGoForward() {
    if (reminderArray.tasks.length > 0) {
      history.push("/create/1");
    } else {
      if (isTooShort) {
        return;
      } else {
        const obj = {
          reminderId: v4(),
          trigger: triggerInput,
          triggerEvent: eventTriggerInput,
          creationTime: Date.now(),
          tasks: [
            {
              taskId: 1,
              verb: "",
              action: "",
              with: "",
            },
          ],
        };

        localStorage.setItem("newEntry", JSON.stringify(obj));

        history.push("/create/1");
      }
    }
  }

  return (
    <main id="CreateCase" className="card-screen">
      <Card
        header={
          <HeaderCreateCaseGoForward
            onClickBackward={caseHandleGoBack}
            onClickForward={caseHandleGoForward}
            currentItem={0}
            totalItems={
              reminderArray.tasks.length > 0 ? reminderArray.tasks.length : 1
            }
          />
        }
      >
        <h2 className="margin-b--s">
          In case <br /> of
        </h2>
        <form id="createForm" className="dispFlex margin-b--l">
          <SpeechInput
            onChange={(event) => {
              setTriggerInput(event.target.value);
            }}
            value={triggerInput}
            label="Trigger"
          />
          <SpeechInput
            onChange={(event) => {
              setEventTriggerInput(event.target.value);
            }}
            value={eventTriggerInput}
            label="Event"
          />
        </form>

        {isTooShort && (
          <p className="Card__message--error">
            The Input fields can't be empty
          </p>
        )}
      </Card>
    </main>
  );
}
