import "./CardOverviewHeader.css";
// import components
import { ReactComponent as BackButtonIcon } from "../../svg/icon-chevron-left.svg";
import { ReactComponent as ForwardButtonIcon } from "../../svg/icon-chevron-right.svg";
// import requirements
import { useHistory } from "react-router-dom";

export default function CardOverviewHeader({
  postId,
  currentReminder,
  reminderId,
}) {
  const history = useHistory();
  const nextTask = Number(postId) + 1;
  const totalTasks = currentReminder.tasks.length;
  return (
    <header className="CardOverview__header dispFlex">
      <button
        className="OverviewBackButton"
        onClick={() => {
          history.goBack();
        }}
      >
        <BackButtonIcon className="lineIcon icon opaque" />
      </button>
      <p>{`${nextTask}/ ${totalTasks}`}</p>

      {totalTasks > nextTask && (
        <button
          className="OverviewForwardButton"
          onClick={() => {
            history.push(`/overview/${reminderId}/${Number(postId) + 1}`);
          }}
        >
          <ForwardButtonIcon className="lineIcon icon opaque" />
        </button>
      )}
    </header>
  );
}
