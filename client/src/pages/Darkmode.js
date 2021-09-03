import "./Darkmode.css";
import Card from "../components/Card";
import HeaderGoBack from "../components/Card_components/HeaderGoBack";

export default function Darkmode({ lightness, handleLightness }) {
  return (
    <main id="Darkmode">
      <Card>
        <HeaderGoBack />
        <div className="Card__content dispFlex col">
          <h2>See the current color scheme:</h2>
          <div className="color__swatches dispFlex">
            <div className="color-cube"></div>
            <div className="color-cube"></div>
            <div className="color-cube"></div>
            <div className="color-cube"></div>
            <div className="color-cube"></div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={lightness}
            onChange={handleLightness}
            className="color-slider"
            id="color-slider"
          />
          <p>{lightness}</p>
        </div>
      </Card>
    </main>
  );
}
