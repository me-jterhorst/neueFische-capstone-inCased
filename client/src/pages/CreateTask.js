import Card from "../components/Card";
// import HeaderActionGoForward from "../components/Card_components/HeaderActionGoForward";
// import FooterSubmit from "../components/Card_components/FooterSubmit";
import SpeechInput from "../components/SpeechInput";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

export default function CreateTask({ handleTask, currentReminder, addTask }) {
  // ============================== Action
  const { taskId } = useParams();
  const history = useHistory();
  const [isTooShort, setIsTooShort] = useState(true);
  const [verbInput, setVerbInput] = useState("");
  const [actionInput, setActionInput] = useState("");
  const [withInput, setWithInput] = useState("");

  const mouseDown = (label, transcript) => {
    label === "Verb" && setVerbInput(transcript);
    label === "Action" && setActionInput(transcript);
    label === "With" && setWithInput(transcript);
  };

  useEffect(() => {
    handleTask({
      taskId,
      verb: verbInput,
      action: actionInput,
      with: withInput,
    });

    setIsTooShort(!verbInput || !actionInput);
  }, [verbInput, actionInput, withInput, taskId, handleTask]);

  function clickForward() {
    if (!isTooShort) {
      addTask(currentReminder);
      history.push(`/create/${Number(taskId) + 1}`);
    }
  }
  return (
    <main id="CreateAction" className="card-screen">
      <Card>
        {Number(taskId) > 0 ? (
          <button onClick={() => history.push(`/create/${Number(taskId) - 1}`)}>
            {" "}
            Backward
          </button>
        ) : (
          <button onClick={() => history.push("/create")}> To Start </button>
        )}
        <button onClick={clickForward}> Forward</button>

        <h2> Do this</h2>
        <form id="createForm" className="dispFlex margin-b--l">
          <SpeechInput
            label="Verb"
            value={verbInput}
            onChange={(event) => setVerbInput(event.target.value)}
            onMouseDown={mouseDown}
          />
          <SpeechInput
            label="Action"
            value={actionInput}
            onChange={(event) => setActionInput(event.target.value)}
            onMouseDown={mouseDown}
          />
          <SpeechInput
            label="With"
            value={withInput}
            onChange={(event) => setWithInput(event.target.value)}
            onMouseDown={mouseDown}
            isRequired={false}
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
