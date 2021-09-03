import "./Card.css";

export default function Card({ isLight, children }) {
  return (
    <article className={`Card dispFlex ${isLight ? "Card--light" : ""}`}>
      {children}
    </article>
  );
}
