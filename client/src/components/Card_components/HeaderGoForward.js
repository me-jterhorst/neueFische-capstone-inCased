import BackButton from "../BackButton";
import ForwardButton from "../ForwardButton";
export default function HeaderSimpleBack() {
  const currentItem = 3;
  const totalItems = 7;
  return (
    <header className="Card__header dispFlex">
      <BackButton />
      <p className="Card__header__numbers">
        {`${currentItem} / ${totalItems}`}
      </p>
      <ForwardButton />
    </header>
  );
}
