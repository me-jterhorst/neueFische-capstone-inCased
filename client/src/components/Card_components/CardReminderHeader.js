import "./CardReminderHeader.css";
import { ReactComponent as BackButtonIcon } from "../../svg/icon-chevron-left.svg";
import { ReactComponent as ForwardButtonIcon } from "../../svg/icon-chevron-right.svg";
export default function CardReminderHeader({ reminder, history }) {
  return (
    <header className="CardReminder__header dispFlex">
      <button type="submit" className="ReminderForwardButton">
        <ForwardButtonIcon className="lineIcon icon opaque" />
      </button>
      <p> 0 / {reminder ? reminder.tasks.length + 1 : 1}</p>
      <button
        type="input"
        className="ReminderBackButton"
        onClick={(event) => {
          event.preventDefault();
          history.push("/");
        }}
      >
        <BackButtonIcon className="lineIcon icon opaque" />
      </button>
    </header>
  );
}
