import React, { useState } from "react";
import 'reactjs-popup/dist/index.css';
import Cosmos from './components/Cosmos.js';
import NewsPhoto from './components/newsPhoto.js';
import TextBox from './components/TextBox.js';

function App() {
  return (
    <div className="App">
      <Cosmos/>
      <TextBox/>
      <NewsPhoto/>
    </div>
  );
}

export default App;
