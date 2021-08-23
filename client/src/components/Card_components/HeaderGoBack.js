import BackButton from "../BackButton";
import { useHistory } from "react-router";

export default function HeaderGoBack() {
  const history = useHistory();

  function goToPrevPage() {
    history.goBack();
  }

  return (
    <header className="Card__header dispFlex">
      <BackButton onClick={goToPrevPage} />
    </header>
  );
}
