import Card from "../components/Card";
import BackButton from "../components/BackButton";
import FooterAccountDelete from "../components/Card_components/FooterAccountDelete";

export default function Account({ isLight }) {
  return (
    <main id="Account" className="card-screen">
      <Card
        className="Card--light"
        header={<BackButton />}
        footer={<FooterAccountDelete />}
        isLight={isLight}
      >
        <h2>Account</h2>
        <p> Hello World</p>
      </Card>
    </main>
  );
}
