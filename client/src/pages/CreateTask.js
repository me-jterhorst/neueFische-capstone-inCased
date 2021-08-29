import Card from "../components/Card";
// import HeaderActionGoForward from "../components/Card_components/HeaderActionGoForward";
// import FooterSubmit from "../components/Card_components/FooterSubmit";
import SpeechInput from "../components/SpeechInput";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function CreateTask({
  supportsSpeech,
  onSpeechInput,
  disabled,
}) {
  // ============================== Action
  const { taskId } = useParams();
  const [isTooShort, setIsTooShort] = useState(true);
  const [verbInput, setVerbInput] = useState("");
  const [actionInput, setActionInput] = useState("");
  const [withInput, setWithInput] = useState("");
  const [action, setAction] = useState({});

  useEffect(() => {
    setAction({
      taskId,
      verb: verbInput,
      action: actionInput,
      with: withInput,
    });

    setIsTooShort(!verbInput || !actionInput);
  }, [verbInput, actionInput, withInput, taskId]);

  console.log(action);
  return (
    <main id="CreateAction" className="card-screen">
      <Card>
        <h2> Do this</h2>
        <form id="createForm" className="dispFlex margin-b--l">
          <SpeechInput
            label="Verb"
            value={verbInput}
            onChange={(event) => setVerbInput(event.target.value)}
            supportsSpeech={supportsSpeech}
            onMouseDown={onSpeechInput}
            disable={disabled}
          />
          <SpeechInput
            label="Action"
            value={actionInput}
            onChange={(event) => setActionInput(event.target.value)}
            supportsSpeech={supportsSpeech}
            onMouseDown={onSpeechInput}
            disable={disabled}
          />
          <SpeechInput
            label="With"
            value={withInput}
            onChange={(event) => setWithInput(event.target.value)}
            supportsSpeech={supportsSpeech}
            isRequired={false}
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
