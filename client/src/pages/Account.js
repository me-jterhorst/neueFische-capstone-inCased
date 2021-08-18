import Card from "../components/Card";
import BackButton from "../components/BackButton";
import FooterAccountDelete from "../components/Card_components/FooterAccountDelete";
import AccountInput from "../components/AccountInput";

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
        <form className="Account__form">
          <AccountInput label="Username" value="Username 1" />
        </form>
      </Card>
    </main>
  );
}
