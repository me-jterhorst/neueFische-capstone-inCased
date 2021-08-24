export default function FooterSubmit({ onClick, text }) {
  return (
    <footer className="Card__footer Card__footer--submit dispFlex">
      <button onClick={onClick} className="opaque" to="#">
        {text}
      </button>
    </footer>
  );
}
