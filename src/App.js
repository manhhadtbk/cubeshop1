import React from "react";
import './sass/main.scss'

import Header from "./components/Header";
import Banner from "./components/Banner";
import Whathappen from "./components/Whathappen";
import Bestproduct from "./components/Bestproduct";
import Portfolio from "./components/Portfolio";
import Story from "./components/Story";
import Issue from "./components/Issue";
import Feed from "./components/Feed";
import Foot from "./components/Foot";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Whathappen />
      <Bestproduct />
      <Portfolio />
      <Story />
      <Issue />
      <Feed />
      <Foot />
    </div>
  );
}

export default App;
