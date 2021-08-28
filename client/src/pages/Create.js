import "./Create.css";
// ============================ Import Components
import Card from "../components/Card";
import HeaderCreateCaseGoForward from "../components/Card_components/HeaderCreateCaseGoForward";
import SpeechInput from "../components/SpeechInput";
// ============================ Import Requirements
import { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function CreateCase({ isLogin, supportsSpeech }) {
  const [isTooShort, setIsTooShort] = useState(true);

  const [triggerInput, setTriggerInput] = useState("");
  const [eventTriggerInput, setEventTriggerInput] = useState("");

  const [caseInput, setCaseInput] = useState({
    reminderId: uuidv4(),
    trigger: "",
    eventTrigger: "",
  });

  useEffect(() => {
    setCaseInput({
      ...caseInput,
      trigger: triggerInput,
      eventTrigger: eventTriggerInput,
    });
    setIsTooShort(!triggerInput || !eventTriggerInput);
  }, [triggerInput, eventTriggerInput]);

  const [actionInput, setActionInput] = useState({});

  return (
    <Switch>
      <Route path="/create/:taskid">
        <main id="CreateAction" className="card-screen">
          <Card> Task</Card>
        </main>
      </Route>

      <Route path="/create">
        <main id="CreateCase" className="card-screen">
          <Card header={<HeaderCreateCaseGoForward />}>
            <h2 className="margin-b--s">
              In case <br /> of
            </h2>
            <form id="createForm" className="dispFlex margin-b--l">
              <SpeechInput
                label="Trigger"
                value={triggerInput}
                onChange={(event) => setTriggerInput(event.target.value)}
                supportsSpeech={supportsSpeech}
                // onMouseDown={onSpeechInput}
                // disable={disable}
              />

              <SpeechInput
                label="Event"
                value={eventTriggerInput}
                onChange={(event) => setEventTriggerInput(event.target.value)}
                supportsSpeech={supportsSpeech}
                // onMouseDown={onSpeechInput}
                // disable={disable}
              />
              {isTooShort && (
                <p className="Card__message--error">
                  Required Input fields can't be empty
                </p>
              )}
            </form>
          </Card>
        </main>
      </Route>
    </Switch>
  );
}
