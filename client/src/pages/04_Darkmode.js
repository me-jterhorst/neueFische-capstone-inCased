import "./Darkmode.css";
// ============================== import components
import Card from "../components/Card";
import HeaderGoBack from "../components/Card_components/HeaderGoBack";
import { useEffect, useState } from "react";

export default function Darkmode({
  lightness,
  darkness,
  handleLightness,
  handleWhite,
}) {
  const size = useWindowSize();

  // Hook
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // Handler to call on window resize

      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  return (
    <main id='Darkmode' className='card-screen'>
      <Card>
        <HeaderGoBack />
        <div
          className={`Card__content dispFlex col ${
            size.height < 780 ? "scrollbar" : ""
          }`}>
          <div className='Darkmode__switches dispFlex col'>
            <h2>Tweak the Blacks:</h2>
            <div className='color__swatches dispFlex'>
              <div className='color-cube'></div>
              <div className='color-cube'></div>
              <div className='color-cube'></div>
              <div className='color-cube'></div>
              <div className='color-cube'></div>
            </div>
            <input
              type='range'
              min='7'
              max='10'
              value={lightness}
              onChange={handleLightness}
              className='color-slider'
              id='color-slider'
            />
            <p>Darkness is: {lightness * 10}%</p>
          </div>
          <div className='Darkmode__switches dispFlex col'>
            <h2>Adjust the White:</h2>
            <input
              type='range'
              min='50'
              max='100'
              value={darkness}
              onChange={handleWhite}
              className='color-slider'
              id='color-slider'
            />
            <p>Your Brightness is: {darkness}%</p>
          </div>
        </div>
      </Card>
    </main>
  );
}
