import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className='top-nav top-nav--active transition'>
      <svg
        className='top-nav__icon'
        width='30'
        height='30'
        viewBox='0 0 30 30'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='3' cy='3' r='3' className='icon-fill--dark' />
        <circle cx='3' cy='15' r='3' className='icon-fill--dark' />
        <circle cx='3' cy='27' r='3' className='icon-fill--dark' />
        <circle cx='15' cy='3' r='3' className='icon-fill--dark' />
        <circle cx='15' cy='15' r='3' className='icon-fill--dark' />
        <circle cx='15' cy='27' r='3' className='icon-fill--dark' />
        <circle cx='27' cy='3' r='3' className='icon-fill--dark' />
        <circle cx='27' cy='15' r='3' className='icon-fill--dark' />
        <circle cx='27' cy='27' r='3' className='icon-fill--dark' />
      </svg>
      <nav className='top-nav__menu dispFlex col'>
        <NavLink className='opaque' to='#'>
          <svg
            className='icon'
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'>
            <circle
              className='icon-stroke--light'
              cx='20'
              cy='20'
              r='13.75'
              stroke-width='2.5'
            />
            <path
              className='icon-fill--light'
              d='M19.1175 29.706C16.5433 29.706 14.0746 28.6834 12.2544 26.8632C10.4342 25.043 9.4116 22.5742 9.4116 20.0001C9.4116 17.4259 10.4342 14.9572 12.2544 13.137C14.0746 11.3168 16.5433 10.2942 19.1175 10.2942L19.1175 20.0001L19.1175 29.706Z'
            />
          </svg>
          Darkmode
        </NavLink>
        <NavLink className='opaque' to='#'>
          <svg
            className='icon'
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              className='icon-stroke--light'
              d='M32.784 24.129L33.484 23.0934L32.784 24.129C33.0954 24.3395 33.1913 24.7547 33.0038 25.0804L31.2112 28.1945C30.9986 28.5638 30.5364 28.7164 30.1414 28.542C26.7603 27.0489 22.8902 29.3023 22.5484 32.9933C22.5087 33.422 22.149 33.75 21.7184 33.75H18.1788C17.784 33.75 17.4549 33.4479 17.4212 33.0546C17.1056 29.3734 13.1984 27.1516 9.87325 28.7607C9.51395 28.9346 9.08143 28.8012 8.88247 28.4556L7.10664 25.3706C6.89947 25.0107 6.99727 24.5341 7.34705 24.2801C10.3319 22.1126 10.3344 17.605 7.27284 15.4895C6.92516 15.2493 6.81985 14.7825 7.03068 14.4163L8.786 11.3669C8.99729 10.9999 9.45297 10.8536 9.83842 11.0291L10.1112 11.1532C13.3611 12.6328 17.0984 10.458 17.4177 6.9014C17.4508 6.53258 17.7599 6.25 18.1302 6.25H21.3211C21.7674 6.25 22.1476 6.57442 22.2178 7.01522C22.7897 10.6074 26.5993 12.6906 29.9331 11.2447C30.3588 11.0601 30.8551 11.2248 31.0855 11.6251L32.8742 14.7324C33.0488 15.0357 32.9591 15.4223 32.6688 15.6177C29.6793 17.6295 29.6747 22.0272 32.66 24.0452L32.784 24.129Z'
              stroke-width='2.5'
            />
            <circle
              cx='20'
              cy='20.3'
              r='5'
              className='icon-stroke--light'
              stroke-width='3'
            />
          </svg>
          Account
        </NavLink>
        <NavLink className='opaque' to='#'>
          <svg
            className='icon'
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'>
            <g clip-path='url(#clip0)'>
              <path
                d='M16.7031 6.69849H9.64384C8.73597 6.69849 8 7.43446 8 8.34233V32.3562C8 33.264 8.73597 34 9.64384 34H29.0319C29.9398 34 30.6757 33.264 30.6757 32.3562V16.5615M21.6346 6.69849H29.0319C29.9398 6.69849 30.6757 7.43446 30.6757 8.34233V9.98617'
                className='icon-stroke--light'
                stroke-width='3'
              />
              <path
                d='M23.7836 20.2198L23.8735 16.8819L33.9526 6.80279C34.8495 5.90589 36.3037 5.90589 37.2006 6.80279C38.0975 7.69969 38.0975 9.15385 37.2006 10.0508L27.1215 20.1299L23.7836 20.2198Z'
                className='icon-stroke--light'
                stroke-width='2.5'
              />
              <path
                d='M31.0239 7.96362L36.0397 12.9793'
                className='icon-stroke--light'
                stroke-width='2.5'
              />
              <mask id='path-4-inside-1' className='icon-fill--light'>
                <rect
                  x='14.2373'
                  y='3'
                  width='9.86305'
                  height='7.39728'
                  rx='1.64384'
                />
              </mask>
              <rect
                x='14.2373'
                y='3'
                width='9.86305'
                height='7.39728'
                rx='1.64384'
                className='icon-stroke--light'
                stroke-width='5'
                mask='url(#path-4-inside-1)'
              />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='40' height='40' className='icon-stroke--light' />
              </clipPath>
            </defs>
          </svg>
          Imprint
        </NavLink>
        <NavLink className='opaque' to='#'>
          <svg
            className='icon'
            viewBox='0 0 40 40'
            xmlns='http://www.w3.org/2000/svg'>
            <circle
              cx='20'
              cy='12'
              r='5.75'
              className='icon-stroke--light'
              stroke-width='2.5'
            />
            <path
              d='M26.375 33.75L13.625 33.75C11.2088 33.75 9.25 31.7912 9.25 29.375C9.25 24.8877 12.8877 21.25 17.375 21.25L22.625 21.25C27.1123 21.25 30.75 24.8877 30.75 29.375C30.75 31.7912 28.7912 33.75 26.375 33.75Z'
              className='icon-stroke--light'
              stroke-width='2.5'
            />
          </svg>
          Login{" "}
        </NavLink>
      </nav>
    </header>
  );
}
