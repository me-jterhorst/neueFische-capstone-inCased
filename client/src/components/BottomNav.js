import "./BottomNav.css";
import { NavLink } from "react-router-dom";
import SpeechButton from "./SpeechButton";

export default function BottomNav({ hasSpeech = true }) {
  return (
    <footer className='dispFlex'>
      {hasSpeech ? <SpeechButton /> : null}

      <nav className='tabNav dispFlex'>
        <NavLink className='opaque' to='#'>
          <svg
            className='icon icon-stroke--light'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M11.1457 6.58377V5.80692C11.1457 5.05231 10.534 4.44058 9.77941 4.44058H9.03338C8.29819 4.44058 7.6948 5.02233 7.66796 5.75703L7.53951 9.27324L4.93299 11.0761L4.91972 11.0853L4.90675 11.0949L4.62919 11.3001C3.47231 12.1554 4.07724 13.9912 5.51594 13.9912L7.52008 13.9912V21.1782V22.2029H8.54483H18.7818H19.8066V21.1782V13.9912L21.8107 13.9912C23.2494 13.9912 23.8544 12.1554 22.6975 11.3001L22.4252 11.0988L22.4199 11.0949L14.7107 5.31875L14.1047 6.12755L14.7107 5.31875C14.0766 4.84363 13.1989 4.86706 12.591 5.37532L11.1457 6.58377Z'
              stroke-width='2.5'
            />
          </svg>
        </NavLink>
        <NavLink className='opaque' to='#'>
          <svg
            className='icon'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.2222 13.9857L14.2975 11.1907L22.6791 2.80906C23.4301 2.05802 24.6478 2.05802 25.3989 2.80906C26.1499 3.56011 26.1499 4.7778 25.3989 5.52884L17.0173 13.9105L14.2222 13.9857Z'
              className='icon-stroke--light'
              stroke-width='2.5'
            />
            <path
              d='M20.2548 3.78424L24.4238 7.95323'
              className='icon-stroke--light'
              stroke-width='2.5'
            />
            <path
              d='M22.6981 14.0049V22.5445H5.6189V5.46533H13.7315'
              className='icon-stroke--light'
              stroke-width='2.5'
              stroke-linecap='round'
            />
          </svg>
        </NavLink>
        <NavLink className='opaque' to='#'>
          <svg
            className='icon'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect x='4' y='2' width='20' height='22.5' rx='1.5' />

            <rect
              className='icon-stroke--light'
              x='4'
              y='2'
              width='20'
              height='22.5'
              rx='1.5'
              stroke-width='2.5'
            />
            <line
              className='icon-stroke--light'
              x1='10'
              y1='8'
              x2='14'
              y2='8'
              stroke-width='1.75'
              stroke-linecap='round'
            />
            <line
              className='icon-stroke--light'
              x1='10'
              y1='13'
              x2='17.5'
              y2='13'
              stroke-width='1.75'
              stroke-linecap='round'
            />
            <line
              className='icon-stroke--light'
              x1='10'
              y1='18'
              x2='17.5'
              y2='18'
              stroke-width='1.75'
              stroke-linecap='round'
            />
          </svg>
        </NavLink>
      </nav>
    </footer>
  );
}
