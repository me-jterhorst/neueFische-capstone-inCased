import "./Create.css";
// =============== Import Components
import Card from "../components/Card";
import SpeechInput from "../components/SpeechInput";
import CardReminderHeader from "../components/Card_components/CardReminderHeader";
// =============== Import Requirements
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";

const initialTask = {
  trigger: "",
  eventTrigger: "",
};

export default function CreateReminder({ submitReminder, reminder }) {
  initialTask.reminderId = uuidv4();
  const history = useHistory();
  const [input, setInput] = useState(initialTask);
  const [isTooShort, setIsTooShort] = useState(true);

  // Update Input Values
  useEffect(() => {
    if (reminder) {
      setInput({
        trigger: reminder.trigger,
        eventTrigger: reminder.eventTrigger,
      });
    }
  }, [reminder]);

  // Validate if Formfield is Empty or not
  useEffect(() => {
    setIsTooShort(!input.trigger || !input.eventTrigger);
  }, [input]);
  // Set SpeechRecognition to right target
  const mouseDownSpeech = (label, transcript) => {
    label === "Trigger" && setInput({ ...input, trigger: transcript });
    label === "Event" && setInput({ ...input, eventTrigger: transcript });
  };

  // Save the bare reminder or fill it with all remaining tasks
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
          <CardReminderHeader reminder={reminder} history={history} />
          <div className="Card__content dispFlex col">
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
          </div>
        </form>
      </Card>
    </main>
  );
}
