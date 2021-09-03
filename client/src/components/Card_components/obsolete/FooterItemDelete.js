import { ReactComponent as DeleteIcon } from "../../svg/icon-delete.svg";

export default function FooterItemDelete({ onClick }) {
  return (
    <footer className="Card__footer Card__footer--light Card__footer--space dispFlex">
      <DeleteIcon onClick={onClick} />
    </footer>
  );
}
