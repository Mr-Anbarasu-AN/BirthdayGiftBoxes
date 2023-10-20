
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [numberOfGifts, setNumberOfGifts] = useState('');
  const [generatedBoxes, setGeneratedBoxes] = useState([]);
  const [boxesGenerated, setBoxesGenerated] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!numberOfGifts || parseInt(numberOfGifts) <= 0) return;

    const boxes = Array.from({ length: parseInt(numberOfGifts) }, (_, index) => index + 1);
    setGeneratedBoxes(boxes);
    setBoxesGenerated(true);
  };

  const handleReset = () => {
    setGeneratedBoxes([]);
    setBoxesGenerated(false);
    setNumberOfGifts('');
  };

  return (
    <>
      <center>
        <div>
          <h1 className="title">WHIP-UP GIFT BOXES</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                className="form-input"
                placeholder="Enter the number"
                type="tel"
                value={numberOfGifts}
                onChange={(e) => setNumberOfGifts(e.target.value)}
                pattern="[0-9]{0-5}"
                maxLength="5"
                required
                title="Values must be numbers within 5 digits"
              />
              <br></br>
              <button type="submit" id="generatebutton">Generate Boxes</button>
            </div>
          </form>
          <h2 className="generated-boxes-heading">Generated Boxes</h2>

          <div className="grid-container">
            <div id="grid" className="grid">
              {generatedBoxes.map((box) => (
                <div className="gift" key={box}>
                  <p>{box}</p>
                </div>
              ))}
            </div>
          </div>

          {boxesGenerated && (
            <button onClick={handleReset}>Reset Boxes</button>
          )}
        </div>
      </center>
    </>
  );
};

export default App;


