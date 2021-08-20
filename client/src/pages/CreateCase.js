import "./CreateCase.css";
import Card from "../components/Card";
import HeaderGoForward from "../components/Card_components/HeaderGoForward";
import SpeechInput from "../components/SpeechInput";

export default function CreateCase() {
  return (
    <main id="CreateCase" className="card-screen">
      <Card header={<HeaderGoForward totalItems={8} />}>
        <h2 className="margin-b--s">
          In case <br /> of
        </h2>
        <form className="dispFlex margin-b--l">
          <SpeechInput label="Trigger" />
          <SpeechInput label="Event" />
        </form>
      </Card>
    </main>
  );
}
