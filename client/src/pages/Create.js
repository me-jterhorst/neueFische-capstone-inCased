import "./Create.css";
// ============================ Import Components
import Card from "../components/Card";
import HeaderCreateCaseGoForward from "../components/Card_components/HeaderCreateCaseGoForward";
import SpeechInput from "../components/SpeechInput";
// ============================ Import Requirements
import { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function CreateCase({ isLogin, supportsSpeech }) {
  // ========================================== Case
  const [isTooShort, setIsTooShort] = useState(true);

  const [caseInput, setCaseInput] = useState({
    reminderId: uuidv4(),
    trigger: "",
    eventTrigger: "",
  });
  const [triggerInput, setTriggerInput] = useState("");
  const [eventTriggerInput, setEventTriggerInput] = useState("");

  useEffect(() => {
    setCaseInput({
      ...caseInput,
      trigger: triggerInput,
      eventTrigger: eventTriggerInput,
    });
    setIsTooShort(!triggerInput || !eventTriggerInput);
  }, [triggerInput, eventTriggerInput]);

  // ============================== Action
  const { taskId } = useParams();
  const location = useLocation();
  console.log(location);
  console.log(taskId);
  const [verbInput, setVerbInput] = useState("");
  const [actionInput, setActionInput] = useState("");
  const [withInput, setWithInput] = useState("");
  const [action, setAction] = useState({
    taskId,
    verb: "",
    action: "",
    with: "",
  });

  useEffect(() => {
    setAction({
      ...action,
      verb: verbInput,
      action: actionInput,
      with: withInput,
    });

    setIsTooShort(!verbInput || !actionInput);
  }, [verbInput, actionInput, withInput]);
  console.log(action);
  return (
    <Switch>
      <Route path="/create/:taskId">
        <main id="CreateAction" className="card-screen">
          <Card>
            <h2> Do this</h2>
            <form id="createForm" className="dispFlex margin-b--l">
              <SpeechInput
                label="Verb"
                value={verbInput}
                onChange={(event) => setVerbInput(event.target.value)}
                supportsSpeech={supportsSpeech}
                // onMouseDown={onSpeechInput}
                // disable={disable}
              />
              <SpeechInput
                label="Action"
                value={actionInput}
                onChange={(event) => setActionInput(event.target.value)}
                supportsSpeech={supportsSpeech}
                // onMouseDown={onSpeechInput}
                // disable={disable}
              />
              <SpeechInput
                label="With"
                value={withInput}
                onChange={(event) => setWithInput(event.target.value)}
                supportsSpeech={supportsSpeech}
                required={false}
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
