import "./PasswordReset.css";
import InputField from "../components/InputField";
import Card from "../components/Card";
import BackButton from "../components/BackButton";
import FooterSubmit from "../components/Card_components/FooterSubmit";

export default function PasswordReset() {
  return (
    <main id="PasswordReset" className="card-screen">
      <Card header={<BackButton />} footer={<FooterSubmit text="Reset" />}>
        <h2 className="margin-b--s">
          Reset <br />
          Password
        </h2>

        <form className="dispFlex margin-b--l">
          <InputField identifier="PasswordReset" label="Email" />
          <InputField
            identifier="PasswordReset"
            label="Password"
            type="password"
          />
        </form>
      </Card>
    </main>
  );
}
