import "./Overview.css";
import { ReactComponent as ForwardButtonIcon } from "../svg/icon-chevron-right.svg";
import Searchfield from "../components/Searchfield";

export default function Overview({ reminderList }) {
  const listItems = reminderList.map((item, index) => {
    return (
      <section className="Overview__card dispFlex" key={item.reminderId}>
        <div className="Overview__card__number"> {item.tasks.length} </div>
        <div className="Overview__card__txt">
          <p> In case of:</p>
          <h4>{item.trigger}</h4>
        </div>
        <div className="Overview__card__link">
          <ForwardButtonIcon className="icon--dark opaque" />
        </div>
      </section>
    );
  });

  return (
    <main id="Overview">
      <Searchfield />
      {listItems}
    </main>
  );
}
