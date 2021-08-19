import "./SignUp.css";
import Card from "../components/Card";
import BackButton from "../components/BackButton";
import FooterSubmit from "../components/Card_components/FooterSubmit";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <main id="Signup" className="card-screen">
      <Card header={<BackButton />} footer={<FooterSubmit text="Sign Up" />}>
        <h2 className="margin-b--s">Sign Up</h2>
        <p>
          Already have an account?
          <br />
          <Link className="opaque link" to="/login">
            Login instead
          </Link>
        </p>

        <form className="dispFlex margin-b--l">
          <InputField id="Signup" label="Username" />
          <InputField id="Signup" label="Email" />
          <InputField id="Signup" label="Password" type="password" />
          <InputField id="Signup" label="Repeat password" type="password" />
        </form>
      </Card>
    </main>
  );
}
