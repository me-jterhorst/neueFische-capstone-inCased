import "./CreateAction.css";
import Card from "../components/Card";
import HeaderGoForward from "../components/Card_components/HeaderGoForward";
import SpeechInput from "../components/SpeechInput";

export default function CreateCase() {
  return (
    <main id="CreateAction" className="card-screen">
      <Card header={<HeaderGoForward totalItems={8} />}>
        <h2 className="margin-b--s">Do this</h2>
        <form className="dispFlex margin-b--l">
          <SpeechInput label="Verb" />
          <SpeechInput label="Action" />
          <SpeechInput label="With" isRequired={false} />
        </form>
      </Card>
    </main>
  );
}
