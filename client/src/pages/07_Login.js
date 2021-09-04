import "./Login.css";
// ============================== import pages
import SignUp from "./07_2_SignUp";
import PasswordReset from "./07_3_PasswordResetPage";
// ============================== import requirements
import { Switch, Route, Link } from "react-router-dom";
import LoginPage from "./07_1_LoginPage";

export default function Login() {
  return (
    <Switch>
      <Route path='/login/signup'>
        <SignUp />
      </Route>

      <Route path='/login/password-reset'>
        <PasswordReset />
      </Route>

      <Route to='/login'>
        <LoginPage />
      </Route>
    </Switch>
  );
}
