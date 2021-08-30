import "./Create.css";
import Card from "../components/Card";
import SpeechInput from "../components/SpeechInput";
// import HeaderActionGoForward from "../components/Card_components/HeaderActionGoForward";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";

const initialTask = {
  reminderId: uuidv4(),
  trigger: "",
  eventTrigger: "",
};

export default function CreateReminder({ submitReminder, reminder }) {
  const history = useHistory();
  const [input, setInput] = useState(initialTask);
  const [isTooShort, setIsTooShort] = useState(true);

  useEffect(() => {
    if (reminder) {
      setInput({
        trigger: reminder.trigger,
        eventTrigger: reminder.eventTrigger,
      });
    }
  }, [reminder]);

  useEffect(() => {
    setIsTooShort(!input.trigger || !input.eventTrigger);
  }, [input]);

  const mouseDownSpeech = (label, transcript) => {
    label === "Trigger" && setInput({ ...input, trigger: transcript });
    label === "Event" && setInput({ ...input, eventTrigger: transcript });
  };

  function handleSubmit(event) {
    event.preventDefault();
    let tasks = [];
    if (reminder?.tasks) {
      tasks = [...reminder.tasks];
    }
    submitReminder({ ...input, tasks });
    history.push("/create/0");
  }

  return (
    <main id="CreateCase" className="card-screen">
      <Card>
        <form
          id="createForm"
          onSubmit={handleSubmit}
          className="dispFlex margin-b--l"
        >
          <button>Forward</button>
          <h2 className="margin-b--s">
            In case <br /> of
          </h2>
          <SpeechInput
            label="Trigger"
            value={input.trigger}
            onChange={(event) =>
              setInput({ ...input, trigger: event.target.value })
            }
            onMouseDown={mouseDownSpeech}
          />

          <SpeechInput
            label="Event"
            value={input.eventTrigger}
            onChange={(event) =>
              setInput({ ...input, eventTrigger: event.target.value })
            }
            onMouseDown={mouseDownSpeech}
          />
          {isTooShort && (
            <p className="Card__message--error">
              Required Input fields can't be empty
            </p>
          )}
        </form>
      </Card>
    </main>
  );
}
