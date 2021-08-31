import Card from "../components/Card";
import SpeechInput from "../components/SpeechInput";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function CreateTask({
  goForward,
  goBackward,
  submitTask,
  reminder,
}) {
  const { taskId } = useParams();
  const id = Number(taskId);
  const [input, setInput] = useState({ verb: "", action: "", with: "" });
  const [isTooShort, setIsTooShort] = useState(true);

  useEffect(() => {
    if (reminder?.tasks[id]) {
      const taskValues = reminder.tasks[id];
      setInput({ ...taskValues });
    }
  }, [id, reminder]);

  useEffect(() => {
    setIsTooShort(!input.verb || !input.action);
  }, [input]);

  const mouseDown = (label, transcript) => {
    label === "Verb" && setInput({ ...input, verb: transcript });
    label === "Action" && setInput({ ...input, action: transcript });
    label === "With" && setInput({ ...input, with: transcript });
  };

  function handleSubmit(event) {
    event.preventDefault();
    submitTask(input);
    setInput({ verb: "", action: "", with: "" });
    goForward();
  }

  return (
    <main id="CreateAction" className="card-screen">
      <Card>
        <form
          id="createForm"
          onSubmit={handleSubmit}
          className="dispFlex margin-b--l"
        >
          <header>
            <button onClick={goBackward}>Backward</button>
            <p>{`${id + 1} / ${reminder.tasks.length + 1} `}</p>
            <button>Forward</button>
          </header>
          <h2> Do this</h2>
          <SpeechInput
            label="Verb"
            value={input.verb}
            onChange={(event) =>
              setInput({ ...input, verb: event.target.value })
            }
            onMouseDown={mouseDown}
          />
          <SpeechInput
            label="Action"
            value={input.action}
            onChange={(event) =>
              setInput({ ...input, action: event.target.value })
            }
            onMouseDown={mouseDown}
          />
          <SpeechInput
            label="With"
            value={input.with}
            onChange={(event) =>
              setInput({ ...input, with: event.target.value })
            }
            onMouseDown={mouseDown}
            isRequired={false}
          />
          {isTooShort && (
            <p className="Card__message--error">
              Required Input fields can't be empty
            </p>
          )}
          {id === reminder.tasks.length && (
            <footer>
              <button onClick={(event) => event.preventDefault()}>
                Add Tasks
              </button>
            </footer>
          )}
        </form>
      </Card>
    </main>
  );
}
