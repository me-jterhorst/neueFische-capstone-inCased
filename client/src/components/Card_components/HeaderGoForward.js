import BackButton from "../BackButton";
import ForwardButton from "../ForwardButton";
import AddAnotherButton from "../AddAnotherButton";
import { useHistory } from "react-router";

export default function HeaderSimpleBack({ currentItem, totalItems }) {
  console.log(currentItem);
  const history = useHistory();

  function goToOverview() {
    history.push("/overview");
  }

  return (
    <header className="Card__header dispFlex">
      {currentItem === 0 && <BackButton onClick={goToOverview} />}

      <p className="Card__header__numbers">
        {`${currentItem + 1} / ${totalItems}`}
      </p>
      {currentItem < totalItems ? <ForwardButton /> : <AddAnotherButton />}
    </header>
  );
}
