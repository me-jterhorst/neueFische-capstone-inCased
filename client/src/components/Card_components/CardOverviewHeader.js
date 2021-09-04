import "./CardOverviewHeader.css";
// import components
import { ReactComponent as BackButtonIcon } from "../../svg/icons/icon-chevron-left.svg";
import { ReactComponent as ForwardButtonIcon } from "../../svg/icons/icon-chevron-right.svg";
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

  function goBackOverview() {
    if (Number(postId) > 0) {
      return history.push(`/overview/${reminderId}/${Number(postId) - 1}`);
    }
    history.push("/overview");
  }
  return (
    <header className='CardOverview__header dispFlex'>
      <button className='OverviewBackButton' onClick={goBackOverview}>
        <BackButtonIcon className='lineIcon icon opaque' />
      </button>
      <p>{`${nextTask} / ${totalTasks}`}</p>

      {totalTasks > nextTask && (
        <button
          className='OverviewForwardButton'
          onClick={() => {
            history.push(`/overview/${reminderId}/${Number(postId) + 1}`);
          }}>
          <ForwardButtonIcon className='lineIcon icon opaque' />
        </button>
      )}
    </header>
  );
}
