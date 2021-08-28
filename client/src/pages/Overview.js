import "./Overview.css";
import { ReactComponent as ForwardButtonIcon } from "../svg/icon-chevron-right.svg";
import { ReactComponent as DeleteIcon } from "../svg/icon-delete.svg";
import Searchfield from "../components/Searchfield";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Overview({ searchquery, onSubmit, onSearch }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const reminderList = user.reminders;
  const [reRender, setReRender] = useState(false);

  /** ==================================== DELETE BUTTON  */
  const handleItemDelete = (specificId) => {
    const remainingListItems = reminderList.filter((reminder) => {
      return reminder.reminderId !== specificId;
    });

    user.reminders = remainingListItems;
    localStorage.setItem("user", JSON.stringify(user));
    setReRender(!reRender);
  };

  const createListItem = (listArr) => {
    const listItems = listArr.map((item) => {
      return (
        <section
          className={`Overview__card dispFlex ${
            item.hasMatchingWith ? "withHighlight" : ""
          } `}
          key={item.reminderId}
        >
          <div className="Overview__card__number"> {item.tasks.length} </div>
          <div className="Overview__card__txt">
            <p> In case of:</p>
            <h4>{item.trigger}</h4>
            <h5>{item.triggerEvent}</h5>
            {item.hasMatchingWith && <p>Found as optional party</p>}
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
  };

  function removeDuplicateArrayObj(arr) {
    return arr.reduce((acc, item) => {
      const hasObj = !!acc.find(
        (uniqueObj) => uniqueObj.reminderId === item.reminderId
      );

      if (!hasObj) {
        return [...acc, item];
      }

      return acc;
    }, []);
  }

  function renderList() {
    /** Check if Searchfield is filled in */
    if (searchquery) {
      /** Get all the main searchresults */
      const filteredByTriggerList = reminderList.filter((item) =>
        item.trigger.toLowerCase().includes(searchquery.toLowerCase())
      );
      /** Get all the secondary searchresults */
      const filteredByWith = reminderList
        .filter((reminder) => {
          return reminder.tasks.some((task) =>
            task.with.toLowerCase().includes(searchquery.toLowerCase())
          );
        })
        .map((reminder) => (reminder = { ...reminder, hasMatchingWith: true }));

      /** Combine both search hits */
      const allSearchHits = [...filteredByTriggerList, ...filteredByWith];

      /** Remove the duplicates if the search criteria meets object more than once*/
      const cleanSearch = removeDuplicateArrayObj(allSearchHits);
      /** Return either the search elements or a message that nothing has been found */
      return cleanSearch.length > 0 ? (
        createListItem(cleanSearch)
      ) : (
        <h2 className="Greeting">No Items found</h2>
      );

      /** If no searchinput is given just return all reminders */
    } else if (reminderList.length > 0) {
      return createListItem(reminderList);

      /** If there are no reminders just notify that there are none */
    } else {
      return <h1 className="Greeting">No entries available</h1>;
    }
  }

  return (
    <main id="Overview">
      <Searchfield
        inputValue={searchquery}
        onSubmit={onSubmit}
        onChange={onSearch}
      />
      {renderList()}
    </main>
  );
}
