import "./Imprint.css";
import Card from "../components/Card";
import HeaderGoBack from "../components/Card_components/HeaderGoBack";

export default function Imprint({ isLight }) {
  return (
    <main id='Imprint' className='card-screen'>
      <Card isLight={isLight}>
        <HeaderGoBack />
        <div className='Card__content'>
          <h2>Imprint</h2>
          <p>
            This App has been made during the
            <span className='txt--highlight'>
              Neue Fische Web Developer Bootcamp
            </span>
            . Design, concept and programming have been made by me,{" "}
            <span className='txt--highlight'>Jakob ter Horst.</span>
          </p>
          <h3>Privacy</h3>
          <p>
            This app might save personal data to an external database in order
            function properly. If you wish to access your saved data, you can do
            so by logging in and visiting your overview, or account tab. Should
            you wish to remove the data, that is associated with your account,
            you can do so by simply deleting your account from the account page.
            Once the Account delete has been issued you will be redirected to
            the homescreen and all saved reminders will be lost.
          </p>
        </div>
      </Card>
    </main>
  );
}
