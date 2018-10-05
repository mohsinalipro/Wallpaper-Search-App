import React, { Component } from "react";
import {
  Card,
  CardImg,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
export default class WallpaperItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <React.Fragment>
        <Card onClick={this.toggle} style={{ cursor: "pointer" }}>
          <CardImg top src={this.props.previewURL} alt="" />
        </Card>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="lg"
        >
          {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader> */}
          <ModalBody>
            <img src={this.props.largeImageURL} className="img-fluid" />
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter> */}
        </Modal>
      </React.Fragment>
    );
  }
}
