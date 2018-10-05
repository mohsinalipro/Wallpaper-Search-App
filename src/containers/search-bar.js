import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { searchBarFocus, fetchWallpapers } from "../actions";
import {
  Container,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      text: ""
    };
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let el = document.querySelector("input:focus");
    if (el) el.blur();
    this.props.fetchWallpapers({ q: this.state.text });
  }

  render() {
    return (
      <Container fluid className="mb-2">
        <Form onSubmit={this.handleFormSubmit} id="search">
          <InputGroup>
            <Input
              placeholder="Search Wallpapers"
              onFocus={() => this.props.searchBarFocus(true)}
              onBlur={() => this.props.searchBarFocus(false)}
              onChange={this.handleTextChange}
              value={this.state.text}
            />
            <InputGroupAddon addonType="append">
              <Button>Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
        <p className="text-center text-muted">
          <small>
            Over 1.5 million royalty free stock photos and videos shared by "
            <a href="http://pixabay.com" target="_blank">
              pixabay
            </a>
            " generous community.
          </small>
        </p>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchBarFocus,
      fetchWallpapers
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
