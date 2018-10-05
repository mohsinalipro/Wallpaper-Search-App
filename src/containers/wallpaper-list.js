import React, { Component } from "react";
import { connect } from "react-redux";
import { CardColumns, Container } from "reactstrap";
import WallpaperItem from "../components/wallpaper-item";
class WallpaperList extends Component {
  render() {
    const mapWallpaperItems = this.props.wallpapers.map(wallpaper => (
      <WallpaperItem {...wallpaper} key={wallpaper.id} />
    ));

    const searchBarFocus = this.props.searchBar.focus;

    return (
      <Container
        fluid
        style={{
          opacity: searchBarFocus ? 0.1 : 1,
          "-webkit-transition": "opacity 1s ease-in-out",
          "-moz-transition": "opacity 1s ease-in-out",
          "-ms-transition": "opacity 1s ease-in-out",
          "-o-transition": "opacity 1s ease-in-out",
          transition: "opacity 1s ease-in-out"
        }}
      >
        <CardColumns style={{ columnCount: 4 }}>
          {mapWallpaperItems}
        </CardColumns>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchBar: state.searchBar,
    wallpapers: state.wallpapers
  };
}
export default connect(mapStateToProps)(WallpaperList);
