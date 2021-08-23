import BackButton from "../BackButton";
import ForwardButton from "../ForwardButton";
import AddAnotherButton from "../AddAnotherButton";
import { useHistory } from "react-router";

export default function HeaderGoForward({ currentItem, totalItems }) {
  const history = useHistory();

  function goToOverview() {
    history.push("/");
  }
  function goToPrevious() {
    history.push(`/create/${currentItem - 1}`);
  }
  function goToNextItem() {
    history.push(`/create/${currentItem + 1}`);
  }

  return (
    <header className="Card__header dispFlex">
      {currentItem === 0 ? (
        <BackButton onClick={goToOverview} />
      ) : (
        <BackButton onClick={goToPrevious} />
      )}

      <p className="Card__header__numbers">
        {`${currentItem + 1} / ${totalItems}`}
      </p>
      {currentItem + 1 < totalItems ? (
        <ForwardButton onClick={goToNextItem} />
      ) : (
        <AddAnotherButton />
      )}
    </header>
  );
}
