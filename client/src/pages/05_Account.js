import "./Account.css";
// ============================== import components
import Card from "../components/Card";
import AccountInput from "../components/Input_components/AccountInput";
import HeaderGoBack from "../components/Card_components/HeaderGoBack";

export default function Account({ isLight }) {
  return (
    <main id='Account' className='card-screen'>
      <Card className='Card' isLight={isLight}>
        <HeaderGoBack />
        <div className='Card__content dispFlex col'>
          <h2>Account</h2>
          <AccountInput label='Username' value='Username 1' />
          <AccountInput label='Email' value='JaneWonder@hotmail.de' />
          <AccountInput label='Password' value='Password' type='password' />
        </div>
      </Card>
    </main>
  );
}
