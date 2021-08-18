import { ReactComponent as DeleteIcon } from "../../svg/icon-delete.svg";

export default function FooterItemDelete({ totalItems }) {
  return (
    <footer className="Card__footer Card__footer--light Card__footer--space dispFlex">
      <DeleteIcon />
      <p>{totalItems}</p>
    </footer>
  );
}
