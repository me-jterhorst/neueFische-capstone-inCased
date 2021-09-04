// ============================== import components
import { ReactComponent as ForwardButtonIcon } from "../svg/icons/icon-chevron-right.svg";
import { ReactComponent as DeleteIcon } from "../svg/icons/icon-delete.svg";
// ============================== import requirements
import { useHistory } from "react-router-dom";

export default function ListPage({
  inputValue,
  globalReminders,
  deleteReminder,
}) {
  const history = useHistory();
  const renderList = globalReminders
    .filter((reminder) => {
      return (
        reminder.trigger.toLowerCase().includes(inputValue.toLowerCase()) ||
        reminder.tasks.some((task) =>
          task.with.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    })
    .map((reminder, index) => {
      return (
        <section
          className={`Overview__card dispFlex ${
            !reminder.trigger.toLowerCase().includes(inputValue.toLowerCase())
              ? "withHighlight"
              : ""
          } `}
          key={reminder.reminderId}>
          <div className='Overview__card__number'>{reminder.tasks.length}</div>

          <div className='Overview__card__txt'>
            <p> In case of:</p>
            <h4>{reminder.trigger}</h4>
            <h5>{reminder.triggerEvent}</h5>
            {!reminder.trigger
              .toLowerCase()
              .includes(inputValue.toLowerCase()) && (
              <p>Found as optional party</p>
            )}
          </div>

          {reminder.tasks.length > 0 && (
            <button
              onClick={() => {
                history.push(`/overview/${reminder.reminderId}/0`);
              }}
              className='btn--forward opaque'>
              <ForwardButtonIcon className='icon--dark ' />
            </button>
          )}
          <button
            onClick={() => deleteReminder(reminder.reminderId)}
            className='btn--delete opaque'>
            <DeleteIcon className='icon-stroke--light' />
          </button>
        </section>
      );
    });

  return (
    <article
      className={`Overview__List  ${
        globalReminders.length > 4 && "List--scroll"
      }`}>
      {globalReminders.length > 0 ? (
        <div>{renderList}</div>
      ) : (
        <h1 className='Greeting'>No reminders available</h1>
      )}
    </article>
  );
}
