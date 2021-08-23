import "./CreateCase.css";
import Card from "../components/Card";
import HeaderCreateCaseGoForward from "../components/Card_components/HeaderCreateCaseGoForward";
import SpeechInput from "../components/SpeechInput";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";

export default function CreateCase() {
  const history = useHistory();
  const [triggerInput, setTriggerInput] = useState("");
  const [eventTriggerInput, setEventTriggerInput] = useState("");
  const [isTooShort, setIsTooShort] = useState(true);

  function caseHandleGoBack() {
    localStorage.clear();
    history.push("/");
  }

  useEffect(() => {
    triggerInput.length === 0 ? setIsTooShort(true) : setIsTooShort(false);
    eventTriggerInput.length === 0 ? setIsTooShort(true) : setIsTooShort(false);
  }, [triggerInput, eventTriggerInput, isTooShort]);

  function caseHandleGoForward(event) {
    event.preventDefault();
    if (isTooShort) {
      return;
    } else {
      const obj = {
        reminderId: 4444,
        trigger: triggerInput,
        triggerEvent: eventTriggerInput,
        creationTime: Date.now(),
        tasks: [],
      };

      localStorage.setItem("newEntry", JSON.stringify(obj));

      history.push("/create/1");
    }
  }

  return (
    <main id="CreateCase" className="card-screen">
      <Card
        header={
          <HeaderCreateCaseGoForward
            clickBackward={() => caseHandleGoBack()}
            clickForward={(event) => caseHandleGoForward(event)}
            currentItem={0}
            totalItems={2}
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
            label="Trigger"
          />
          <SpeechInput
            onChange={(event) => {
              setEventTriggerInput(event.target.value);
            }}
            label="Event"
          />
        </form>

        {isTooShort && <p>The Input fields can't be empty</p>}
      </Card>
    </main>
  );
}
