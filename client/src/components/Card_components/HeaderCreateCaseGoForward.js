import BackButton from "../BackButton";
import ForwardButton from "../ForwardButton";

export default function HeaderCreateCaseGoForward({
  onClickForward,
  onClickBackward,
  totalItems,
}) {
  return (
    <header className="Card__header dispFlex">
      <BackButton onClick={onClickBackward} />

      <p className="Card__header__numbers">{`${0.5} / ${totalItems}`}</p>

      <ForwardButton onClick={onClickForward} />
    </header>
  );
}
