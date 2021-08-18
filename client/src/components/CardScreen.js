import "./CardScreen.css";
import FooterConfirmation from "./Card_components/FooterConfirmation";
import FooterSubmit from "./Card_components/FooterSubmit";
import FooterItemDelete from "./Card_components/FooterItemDelete";
import FooterAccountDelete from "./Card_components/FooterAccountDelete";
import HeaderGoBack from "./Card_components/HeaderGoBack";
import HeaderGoForward from "./Card_components/HeaderGoForward";

export default function CardScreen({ id, page, hasForward, isLight }) {
  function chooseFooter() {
    switch (id) {
      case "Account":
        return <FooterAccountDelete />;
      case "Item":
        return <FooterItemDelete totalItems={8} />;
      case "SignUp":
        return <FooterSubmit text="Sign up" />;
      case "Login":
        return <FooterSubmit text="Login" />;
      case "Password":
        return <FooterSubmit text="Reset Password" />;
      case "Add":
        return <FooterSubmit text="Add new" />;
      case "Confirm":
        return <FooterConfirmation />;

      default:
        return "";
    }
  }

  return (
    <main id={id} className={`CardScreen`}>
      <article className={`Card ${isLight ? "Card--light" : ""}`}>
        {/* Card Header */}
        {hasForward ? <HeaderGoForward totalItems={7} /> : <HeaderGoBack />}

        {/* Card Content */}
        <section className="Card__content">{page}</section>

        {/* Card Footer */}
        {/* {hasFooter ? <FooterAccountDelete /> : ""} */}
        {chooseFooter()}
      </article>
    </main>
  );
}
