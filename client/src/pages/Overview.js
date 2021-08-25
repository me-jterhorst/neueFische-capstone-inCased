import "./Overview.css";
import { ReactComponent as ForwardButtonIcon } from "../svg/icon-chevron-right.svg";
import { ReactComponent as DeleteIcon } from "../svg/icon-delete.svg";
import Searchfield from "../components/Searchfield";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

export default function Overview() {
  const user = JSON.parse(localStorage.getItem("user"));
  const reminderList = user.reminders;
  const [reRender, setReRender] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleItemDelete = useCallback(
    (specificId) => {
      const remainingListItems = reminderList.filter((item) => {
        return item.reminderId !== specificId;
      });

      user.reminders = remainingListItems;
      localStorage.setItem("user", JSON.stringify(user));
      setReRender(!reRender);
    },
    [reRender, reminderList, user]
  );

  const createListItem = useCallback(
    (listArr) => {
      const listItems = listArr.map((item) => {
        return (
          <section className="Overview__card dispFlex" key={item.reminderId}>
            <div className="Overview__card__number"> {item.tasks.length} </div>
            <div className="Overview__card__txt">
              <p> In case of:</p>
              <h4>{item.trigger}</h4>
              <h5>{item.triggerEvent}</h5>
            </div>

            {item.tasks.length === 0 && (
              <DeleteIcon
                className="Overview__card__link opaque"
                onClick={() => handleItemDelete(item.reminderId)}
              />
            )}
            <Link
              to={`/overview/task/${item.reminderId}/0`}
              className="Overview__card__link"
            >
              <ForwardButtonIcon className="icon--dark opaque" />
            </Link>
          </section>
        );
      });

      return listItems;
    },
    [handleItemDelete]
  );

  function onSearch(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }

  function removeDuplicateArrayObj(arr) {
    return arr.reduce((acc, item) => {
      const hasProduct = !!acc.find(
        (uniqueProduct) => uniqueProduct.reminderId === item.reminderId
      );

      if (!hasProduct) {
        return [...acc, item];
      }

      return acc;
    }, []);
  }

  function renderList() {
    if (searchInput) {
      const filteredByTriggerList = reminderList.filter((item) =>
        item.trigger.includes(searchInput)
      );

      const filteredByWith = reminderList.filter((reminder) => {
        return reminder.tasks.some((task) => task.with.includes(searchInput));
      });

      const allSearchHits = [...filteredByTriggerList, ...filteredByWith];

      const cleanSearch = removeDuplicateArrayObj(allSearchHits);
      return cleanSearch.length > 0 ? (
        createListItem(cleanSearch)
      ) : (
        <h2 className="Greeting">No Items found</h2>
      );
    } else if (reminderList.length > 0) {
      return createListItem(reminderList);
    } else {
      return <h1 className="Greeting">No entries available</h1>;
    }
  }

  return (
    <main id="Overview">
      <Searchfield inputValue={searchInput} onSubmit={onSearch} />

      {renderList()}
    </main>
  );
}
