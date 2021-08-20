import "./Login.css";
import Card from "../components/Card";
import BackButton from "../components/BackButton";
import FooterSubmit from "../components/Card_components/FooterSubmit";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main id="Login" className="card-screen">
      <Card header={<BackButton />} footer={<FooterSubmit text="Login" />}>
        <h2 className="margin-b--s">Login</h2>
        <p>
          No Account yet?
          <br />
          <Link className="opaque link" to="/signup">
            Sign Up here
          </Link>
        </p>

        <form className="dispFlex margin-b--l">
          <InputField identifier="Login" label="Username" />
          <InputField identifier="Login" label="Password" type="password" />
        </form>

        <details>
          <summary>Forgot your password?</summary>
          <Link className="link" to="/password-reset">
            Password reset
          </Link>
        </details>
      </Card>
    </main>
  );
}
