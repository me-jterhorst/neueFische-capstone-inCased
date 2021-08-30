import "./Create.css";
import Card from "../components/Card";
// import HeaderActionGoForward from "../components/Card_components/HeaderActionGoForward";
import SpeechInput from "../components/SpeechInput";
import { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";

export default function CreateReminder({ handleReminder, currentReminder }) {
  // ========================================== Case
  const reminderId = useMemo(uuidv4, []);
  const [triggerInput, setTriggerInput] = useState(
    currentReminder.trigger || ""
  );
  const [eventInput, setEventInput] = useState(
    currentReminder.eventTrigger || ""
  );
  const [isTooShort, setIsTooShort] = useState(true);
  const history = useHistory();

  const mouseDown = (label, transcript) => {
    label === "Trigger" && setTriggerInput(transcript);
    label === "Event" && setEventInput(transcript);
  };

  useEffect(() => {
    handleReminder({
      reminderId,
      trigger: triggerInput,
      eventTrigger: eventInput,
      tasks: [],
    });
    setIsTooShort(!triggerInput || !eventInput);
  }, [triggerInput, eventInput, reminderId, handleReminder]);

  function clickFoward() {
    if (!isTooShort) {
      history.push(`/create/0`);
    }
  }
  return (
    <main id="CreateCase" className="card-screen">
      <Card>
        <button onClick={() => clickFoward()}>Forward</button>
        <h2 className="margin-b--s">
          In case <br /> of
        </h2>
        <form id="createForm" className="dispFlex margin-b--l">
          <SpeechInput
            label="Trigger"
            value={triggerInput}
            onChange={(event) => setTriggerInput(event.target.value)}
            onMouseDown={mouseDown}
          />

          <SpeechInput
            label="Event"
            value={eventInput}
            onChange={(event) => setEventInput(event.target.value)}
            onMouseDown={mouseDown}
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
