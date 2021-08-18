import { Link } from "react-router-dom";

export default function FooterSubmit({ text }) {
  return (
    <footer className="Card__footer Card__footer--submit dispFlex">
      <Link className="opaque" to="#">
        {text}
      </Link>
    </footer>
  );
}
