import "./CreateAction.css";
import Card from "../components/Card";
import HeaderGoForward from "../components/Card_components/HeaderGoForward";
import SpeechInput from "../components/SpeechInput";
import { useParams } from "react-router";
import FooterSubmit from "../components/Card_components/FooterSubmit";

export default function CreateCase() {
  const { number } = useParams();

  return (
    <main id="CreateAction" className="card-screen">
      <Card
        header={<HeaderGoForward currentItem={Number(number)} totalItems={2} />}
      >
        <h2 className="margin-b--s">Do this</h2>
        <form className="dispFlex margin-b--l">
          <SpeechInput label="Verb" />
          <SpeechInput label="Action" />
          <SpeechInput label="With" isRequired={false} />
        </form>
        <FooterSubmit text="Add todo" />
      </Card>
    </main>
  );
}
