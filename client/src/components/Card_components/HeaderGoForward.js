import BackButton from "../BackButton";
import ForwardButton from "../ForwardButton";
import AddAnotherButton from "../AddAnotherButton";
export default function HeaderSimpleBack({ totalItems }) {
  const currentItem = 1;
  return (
    <header className="Card__header dispFlex">
      <BackButton />
      <p className="Card__header__numbers">
        {`${currentItem} / ${totalItems}`}
      </p>
      {currentItem < totalItems ? <ForwardButton /> : <AddAnotherButton />}
    </header>
  );
}
