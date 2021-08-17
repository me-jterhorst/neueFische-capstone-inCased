import "./CardScreen.css";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";

export default function CardScreen({
  id,
  page,
  hasForward,
  isLight,
  hasFooter,
}) {
  const currentItem = 3;
  const totalItems = 7;
  return (
    <main id={id} className={`CardScreen`}>
      <article className={`Card ${isLight ? "Card--light" : ""}`}>
        {/* Card Header */}
        <header className="Card__header dispFlex">
          <BackButton />
          {hasForward ? (
            <p className="Card__header__numbers">
              {`${currentItem} / ${totalItems}`}
            </p>
          ) : (
            ""
          )}
          {hasForward ? <ForwardButton /> : ""}
        </header>

        {/* Card Content */}
        <section className="Card__content">{page}</section>

        {/* Card Footer */}
        {hasFooter ? (
          <footer className="Card__footer dispFlex">Test</footer>
        ) : (
          ""
        )}
      </article>
    </main>
  );
}
