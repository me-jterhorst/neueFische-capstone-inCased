import "./PasswordReset.css";
import InputField from "../components/InputField";
import Card from "../components/Card";

import FooterSubmit from "../components/Card_components/FooterSubmit";
import HeaderGoBack from "../components/Card_components/HeaderGoBack";

export default function PasswordReset() {
  return (
    <main id="PasswordReset" className="card-screen">
      <Card>
        <HeaderGoBack />
        <div className="Card__content">
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
        </div>
        <FooterSubmit text="Reset" />
      </Card>
    </main>
  );
}
