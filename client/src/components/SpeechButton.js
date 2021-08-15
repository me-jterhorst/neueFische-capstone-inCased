import "./SpeechButton.css";

export default function SpeechButton() {
  return (
    <div className='speechPart'>
      <button className='speechButton'>
        <svg
          className='icon'
          viewBox='0 0 43 43'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            className='icon-stroke--dark'
            x='14.3833'
            y='6.38336'
            width='11.5'
            height='21.3'
            rx='5.35712'
            stroke-width='2.5'
          />
          <path
            d='M15.9332 12.8333H18.7332'
            className='icon-stroke--dark'
            stroke-width='2.5'
            stroke-linecap='round'
          />
          <path
            d='M15.9332 17.4233H18.7332'
            className='icon-stroke--dark'
            stroke-width='2.5'
            stroke-linecap='round'
          />
          <path
            d='M15.9332 22.0848H18.7332'
            className='icon-stroke--dark'
            stroke-width='2.5'
            stroke-linecap='round'
          />
          <path
            d='M18.6332 33.5569C18.6332 34.3854 19.3048 35.0569 20.1332 35.0569C20.9616 35.0569 21.6332 34.3854 21.6332 33.5569H18.6332ZM18.6332 26.5569V33.5569H21.6332V26.5569H18.6332Z'
            fill='black'
          />
          <path
            d='M13.1333 34.5334H27.1333'
            className='icon-stroke--dark'
            stroke-width='3'
            stroke-linecap='round'
          />
        </svg>
      </button>
    </div>
  );
}
