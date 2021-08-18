import "./Card.css";

export default function Card({ header, footer, isLight, children }) {
  return (
    <article className={`Card ${isLight ? "Card--light" : ""}`}>
      {header}
      <section className="Card__content">{children}</section>
      {footer}
    </article>
  );
}
