import "./Account.css";
import Card from "../components/Card";
import AccountInput from "../components/AccountInput";
import HeaderGoBack from "../components/Card_components/HeaderGoBack";

export default function Account({ isLight }) {
  return (
    <main id='Account' className='card-screen'>
      <Card isLight={isLight}>
        <HeaderGoBack />
        <div className='Card__content'>
          <h2>Account</h2>
          <div className='Account__input__wrapper dispFlex col'>
            <AccountInput label='Username' value='Username 1' />
            <AccountInput label='Email' value='JaneWonder@hotmail.de' />
            <AccountInput label='Password' value='Password' type='password' />
          </div>
        </div>
      </Card>
    </main>
  );
}
