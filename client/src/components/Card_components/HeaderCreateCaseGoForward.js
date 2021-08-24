import BackButton from "../BackButton";
import ForwardButton from "../ForwardButton";

export default function HeaderCreateCaseGoForward({
  clickForward,
  clickBackward,
  currentItem,
  totalItems,
}) {
  return (
    <header className="Card__header dispFlex">
      <BackButton onClick={clickBackward} />

      <p className="Card__header__numbers">{`${0.5} / ${totalItems}`}</p>

      <ForwardButton onClick={clickForward} />
    </header>
  );
}
