import BackButton from "../BackButton";
import ForwardButton from "../ForwardButton";
import AddAnotherButton from "../AddAnotherButton";

export default function HeaderActionGoForward({
  onClickBackward,
  onClickForward,
  onClickAddForward,
  currentItem,
  totalItems,
}) {
  return (
    <header className="Card__header dispFlex">
      <BackButton onClick={onClickBackward} />

      <p className="Card__header__numbers">
        {`${currentItem} / ${totalItems}`}
      </p>
      {currentItem < totalItems ? (
        <ForwardButton onClick={onClickForward} />
      ) : (
        <AddAnotherButton onClick={onClickAddForward} />
      )}
    </header>
  );
}
