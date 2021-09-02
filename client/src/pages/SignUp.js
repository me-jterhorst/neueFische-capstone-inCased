import "./SignUp.css";
import Card from "../components/Card";
import HeaderGoBack from "../components/Card_components/HeaderGoBack";
import FooterSubmit from "../components/Card_components/FooterSubmit";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <main id="Signup" className="card-screen">
      <Card>
        <HeaderGoBack />
        <div className="Card__content">
          <h2 className="margin-b--s">Sign Up</h2>
          <p>
            Already have an account?
            <br />
            <Link className="opaque link" to="/login">
              Login instead
            </Link>
          </p>

          <form className="dispFlex margin-b--l">
            <InputField identifier="Signup" label="Username" />
            <InputField identifier="Signup" label="Email" />
            <InputField identifier="Signup" label="Password" type="password" />
            <InputField
              identifier="Signup"
              label="Repeat password"
              type="password"
            />
          </form>
        </div>
        <FooterSubmit text="Sign Up" />
      </Card>
    </main>
  );
}
