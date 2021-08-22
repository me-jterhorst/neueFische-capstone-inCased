import "./SinglePage.css";
import Card from "../components/Card";
import FooterAccountDelete from "../components/Card_components/FooterAccountDelete";
import HeaderGoForward from "../components/Card_components/HeaderGoForward";
import SpeechInput from "../components/SpeechInput";

export default function Account({ isLight }) {
  return (
    <main id="SinglePage" className="card-screen">
      <Card
        header={<HeaderGoForward />}
        footer={<FooterAccountDelete />}
        isLight={isLight}
      >
        <h2>Some Name</h2>
        <form className="Account__form dispFlex">
          <SpeechInput />
          <SpeechInput />
          <SpeechInput />
          <SpeechInput />
        </form>
      </Card>
    </main>
  );
}
