import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isOpen: false,
      modal: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal() {
    console.log(this.state.modal);
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Wallpapers</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.toggleModal}>
                  About
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className}
          size="lg"
        >
          <ModalHeader toggle={this.toggleModal}>About</ModalHeader>
          <ModalBody>
            <p>
              This App is made with ❤️ and React with Redux
              <br />
              by 🔥 Mohsin Ali <br />
              Linked Profile:{" "}
              <a href="https://www.linkedin.com/in/mohsinalipro">
                mohsinalipro
              </a>
            </p>
          </ModalBody>
          <ModalFooter>
            <p>
              Content Source:{" "}
              <a href="http://pixabay.com" target="_blank">
                Pixabay
              </a>
            </p>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
