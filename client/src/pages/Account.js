import "./Account.css";
import Card from "../components/Card";
import BackButton from "../components/BackButton";
import FooterAccountDelete from "../components/Card_components/FooterAccountDelete";
import AccountInput from "../components/AccountInput";

export default function Account({ isLight }) {
  return (
    <main id="Account" className="card-screen">
      <Card
        header={<BackButton />}
        footer={<FooterAccountDelete />}
        isLight={isLight}
      >
        <h2>Account</h2>
        <form className="Account__form dispFlex">
          <AccountInput label="Username" value="Username 1" />
          <AccountInput label="Email" value="JaneWonder@hotmail.de" />
          <AccountInput label="Password" value="Password" type="password" />
        </form>
      </Card>
    </main>
  );
}
