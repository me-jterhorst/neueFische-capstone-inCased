import "./Darkmode.css";
// ============================== import components
import Card from "../components/Card";
import HeaderGoBack from "../components/Card_components/HeaderGoBack";

export default function Darkmode({
  lightness,
  darkness,
  handleLightness,
  handleWhite,
}) {
  return (
    <main id='Darkmode' className='card-screen'>
      <Card>
        <HeaderGoBack />
        <div className='Card__content dispFlex col'>
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
      </Card>
    </main>
  );
}
