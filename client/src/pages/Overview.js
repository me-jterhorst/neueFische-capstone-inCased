import "./Overview.css";
import { ReactComponent as ForwardButtonIcon } from "../svg/icon-chevron-right.svg";
import Searchfield from "../components/Searchfield";
import { Link } from "react-router-dom";

export default function Overview({ reminderList }) {
  const listItems = reminderList.map((item, index) => {
    return (
      <section className="Overview__card dispFlex" key={item.reminderId}>
        <div className="Overview__card__number"> {item.tasks.length} </div>
        <div className="Overview__card__txt">
          <p> In case of:</p>
          <h4>{item.trigger}</h4>
          <h5>{item.triggerEvent}</h5>
        </div>
        <Link
          to={`/overview/task/${item.reminderId}/0`}
          className="Overview__card__link"
        >
          <ForwardButtonIcon className="icon--dark opaque" />
        </Link>
      </section>
    );
  });

  return (
    <main id="Overview">
      <Searchfield />
      {listItems.length > 0 ? (
        listItems
      ) : (
        <h1>You need to create some tasks first</h1>
      )}
    </main>
  );
}
