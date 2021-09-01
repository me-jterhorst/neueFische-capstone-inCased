import "./ListPage.css";
// import components
import { ReactComponent as ForwardButtonIcon } from "../svg/icon-chevron-right.svg";
// import requirements
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ListPage({
  inputValue,
  userReminders,
  updateReminder,
  reminders,
}) {
  function handleSearch(inputValue) {
    if (inputValue) {
      const filteredReminders = reminders.filter((reminder) => {
        return (
          reminder.trigger.toLowerCase().includes(inputValue.toLowerCase()) ||
          reminder.tasks.some((task) =>
            task.with.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
      });
      updateReminder(filteredReminders);
    } else {
      updateReminder(userReminders);
    }
  }

  function renderList() {
    return reminders.map((reminder, index) => {
      return (
        <section
          className={`Overview__card dispFlex ${
            !reminder.trigger.toLowerCase().includes(inputValue.toLowerCase())
              ? "withHighlight"
              : ""
          } `}
          key={index}
        >
          <div className="Overview__card__number">{reminder.tasks.length}</div>
          <div className="Overview__card__txt">
            <p> In case of:</p>
            <h4>{reminder.trigger}</h4>
            <h5>{reminder.triggerEvent}</h5>
            {!reminder.trigger
              .toLowerCase()
              .includes(inputValue.toLowerCase()) && (
              <p>Found as optional party</p>
            )}
          </div>

          <Link to={`/overview/${index}/0`} className="Overview__card__link">
            <ForwardButtonIcon className="icon--dark opaque" />
          </Link>
        </section>
      );
    });
  }

  useEffect(() => {
    handleSearch(inputValue);
  }, [inputValue]);

  /**
   * TO DO:
   * Handle Delete Function to remove whole list Item and update
   * App -> user.reminders & localStorage
   *
   * Figure out a way to include the UseEffect dependancy
   *
   */

  return (
    <article
      className={`Overview__List  ${reminders.length > 4 && "List--scroll"}`}
    >
      {reminders.length > 0 ? (
        renderList()
      ) : (
        <h1 className="Greeting">No reminders available</h1>
      )}
    </article>
  );
}
