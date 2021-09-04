import "./CardTaskHeader.css";
import { ReactComponent as BackButtonIcon } from "../../svg/icons/icon-chevron-left.svg";
import { ReactComponent as ForwardButtonIcon } from "../../svg/icons/icon-chevron-right.svg";
import { ReactComponent as AddButtonIcon } from "../../svg/icons/icon-add.svg";

export default function CardTaskHeader({ tasks, goBackward, taskId }) {
  return (
    <header className='CardTask__header dispFlex'>
      {taskId !== tasks.length && (
        <button className='TaskForwardButton'>
          <ForwardButtonIcon className='lineIcon icon opaque' />
        </button>
      )}
      {taskId === tasks.length && (
        <button className='TaskForwardButton'>
          <AddButtonIcon className='lineIcon icon opaque' />
        </button>
      )}
      <p>{`${taskId + 1} / ${tasks.length + 1} `}</p>
      <button className='TaskBackButton' onClick={goBackward}>
        <BackButtonIcon className='lineIcon icon opaque' />
      </button>
    </header>
  );
}
