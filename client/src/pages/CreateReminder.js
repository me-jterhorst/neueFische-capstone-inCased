import "./Create.css";
import Card from "../components/Card";
// import HeaderActionGoForward from "../components/Card_components/HeaderActionGoForward";
import SpeechInput from "../components/SpeechInput";
import { useState, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateReminder({
  supportsSpeech,
  disabled,
  onSpeechInput,
}) {
  // ========================================== Case
  const reminderId = useMemo(uuidv4, []);
  const [reminder, setReminder] = useState({});
  const [triggerInput, setTriggerInput] = useState("");
  const [eventTriggerInput, setEventTriggerInput] = useState("");
  const [isTooShort, setIsTooShort] = useState(true);

  useEffect(() => {
    setReminder({
      reminderId,
      trigger: triggerInput,
      eventTrigger: eventTriggerInput,
    });
    setIsTooShort(!triggerInput || !eventTriggerInput);
  }, [triggerInput, eventTriggerInput, reminderId]);

  console.log(reminder);

  return (
    <main id="CreateCase" className="card-screen">
      <Card>
        <h2 className="margin-b--s">
          In case <br /> of
        </h2>
        <form id="createForm" className="dispFlex margin-b--l">
          <SpeechInput
            label="Trigger"
            value={triggerInput}
            onChange={(event) => setTriggerInput(event.target.value)}
            supportsSpeech={supportsSpeech}
            onMouseDown={onSpeechInput}
            disable={disabled}
          />

          <SpeechInput
            label="Event"
            value={eventTriggerInput}
            onChange={(event) => setEventTriggerInput(event.target.value)}
            supportsSpeech={supportsSpeech}
            onMouseDown={onSpeechInput}
            disable={disabled}
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
