import React, { useState } from "react";
import 'reactjs-popup/dist/index.css';
import Cosmos from './components/Cosmos';
import NewsPhoto from './components/newsPhoto';
import TextBox from './components/TextBox';
import NavbarComponent from './components/Navbar/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Cosmos/>
      <TextBox/>
      <NewsPhoto/>
    </div>
  );
}

export default App;
