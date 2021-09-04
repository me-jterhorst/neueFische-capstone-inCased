// ============================== import components
import Card from "../components/Card";
import HeaderGoBack from "../components/Card_components/HeaderGoBack";
import FooterSubmit from "../components/Card_components/FooterSubmit";
import InputField from "../components/Input_components/LoginInputField";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main id='Login' className='card-screen'>
      <Card>
        <HeaderGoBack />
        <div className='Card__content'>
          <h2>Login</h2>
          <h3 className='margin-b--l'>
            No Account yet?
            <br />
            <Link className='opaque link' to='/login/signup'>
              Sign Up here
            </Link>
          </h3>

          <form className='dispFlex margin-b--l'>
            <InputField identifier='Login' label='Username' />
            <InputField identifier='Login' label='Password' type='password' />

            <details>
              <summary>Forgot your password?</summary>
              <Link className='link' to='/login/password-reset'>
                Password reset
              </Link>
            </details>
          </form>
        </div>
        <FooterSubmit text='Login' />
      </Card>
    </main>
  );
}
