import BackButton from "../BackButton";
import ForwardButton from "../ForwardButton";
import AddAnotherButton from "../AddAnotherButton";

export default function HeaderActionGoForward({
  clickBackward,
  clickForward,
  clickAddForward,
  currentItem,
  totalItems,
}) {
  return (
    <header className="Card__header dispFlex">
      <BackButton onClick={clickBackward} />

      <p className="Card__header__numbers">
        {`${currentItem + 1} / ${totalItems}`}
      </p>
      {currentItem + 1 < totalItems ? (
        <ForwardButton onClick={clickForward} />
      ) : (
        <AddAnotherButton onClick={clickAddForward} />
      )}
    </header>
  );
}
