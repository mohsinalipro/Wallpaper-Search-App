import React, { Component } from "react";
import Header from "./header";
import WallpaperList from "../containers/wallpaper-list";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WallpaperList />
      </div>
    );
  }
}

export default App;
