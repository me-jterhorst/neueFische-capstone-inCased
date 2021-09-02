import { ReactComponent as BackButtonIcon } from "../../svg/icon-chevron-left.svg";
import { useHistory } from "react-router";

export default function HeaderGoBack() {
  const history = useHistory();

  function goToPrevPage() {
    history.goBack();
  }

  return (
    <header className="Card__header dispFlex">
      <button className="OverviewBackButton">
        <BackButtonIcon
          onClick={goToPrevPage}
          className="lineIcon icon opaque"
        />
      </button>
    </header>
  );
}
