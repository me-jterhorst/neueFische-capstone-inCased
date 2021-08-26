import "./CreateCase.css";
import Card from "../components/Card";
import HeaderCreateCaseGoForward from "../components/Card_components/HeaderCreateCaseGoForward";
import SpeechInput from "../components/SpeechInput";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateCase() {
  const history = useHistory();
  const reminderObj = JSON.parse(localStorage.getItem("newEntry")) || {
    tasks: [],
  };

  const [triggerInput, setTriggerInput] = useState(
    reminderObj.tasks.length === 0 ? "" : reminderObj.trigger
  );
  const [eventTriggerInput, setEventTriggerInput] = useState(
    reminderObj.tasks.length === 0 ? "" : reminderObj.triggerEvent
  );

  const [isTooShort, setIsTooShort] = useState(true);

  /** ==============================  Speech To Text */
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  function onSpeechInput(event) {
    event.preventDefault();
    const buttonTarget = event.target.id;
    recognition.start();

    recognition.onresult = (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;

      if (buttonTarget.toLowerCase() === "trigger") {
        setTriggerInput(transcript.slice(0, -1));
      } else {
        setEventTriggerInput(transcript.slice(0, -1));
      }
    };
  }

  /** INPUT VALIDATION */
  useEffect(() => {
    setIsTooShort(triggerInput.length === 0 || eventTriggerInput.length === 0);
  }, [triggerInput, eventTriggerInput]);

  /** GO BACK FUNCTION */
  function caseHandleGoBack() {
    localStorage.removeItem("newEntry");
    history.push("/");
  }
  /** CYCLE FORWARD */
  function caseHandleGoForward() {
    if (reminderObj.tasks.length > 0) {
      history.push("/create/1");
    } else {
      if (isTooShort) {
        return;
      } else {
        const obj = {
          reminderId: uuidv4(),
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
              reminderObj.tasks.length > 0 ? reminderObj.tasks.length : 1
            }
          />
        }
      >
        <h2 className="margin-b--s">
          In case <br /> of
        </h2>
        <form
          onSubmit={(event) => event.preventDefault()}
          id="createForm"
          className="dispFlex margin-b--l"
        >
          <SpeechInput
            onChange={(event) => {
              setTriggerInput(event.target.value);
            }}
            onMouseDown={onSpeechInput}
            value={triggerInput}
            label="Trigger"
          />
          <SpeechInput
            onChange={(event) => {
              setEventTriggerInput(event.target.value);
            }}
            onMouseDown={onSpeechInput}
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
