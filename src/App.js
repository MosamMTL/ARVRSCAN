import logo from './logo.svg';
import './App.css';
import { AFrameRenderer, Marker } from "react-web-ar"


function App() {
  return (
    <a-scene embedded arjs='sourceType: webcam;debugUIEnabled: false;'>
      <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
      <a-marker-camera preset='hiro'></a-marker-camera>
    </a-scene>
  );
}

export default App;
