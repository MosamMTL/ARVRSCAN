import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <a-scene embedded arjs='sourceType: webcam;'>
        <a-marker type='pattern' url='path/to/pattern-marker.patt'>
          <a-box position='0 0.5 0' material='color: red;'></a-box>
        </a-marker>

        <a-marker preset='hiro'>
          <a-box position='0 0.5 0' material='color: green;'></a-box>
        </a-marker>

        <a-marker type='barcode' value='5'>
          <a-box position='0 0.5 0' material='color: blue;'></a-box>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
