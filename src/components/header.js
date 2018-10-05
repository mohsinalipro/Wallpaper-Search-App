import React from "react";
import NavigationBar from "./navigation-bar";
import SearchBar from "../containers/search-bar";
export default () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <SearchBar />
    </React.Fragment>
  );
};
