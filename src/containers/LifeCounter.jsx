import React, { Component, Fragment } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import { Players } from "../components/Players/Players";

export class LifeCounter extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          style={{ backgroundColor: "#00d7b1", color: "white" }}
          className="mb-2"
        >
          <NavbarBrand>LS Life Counter</NavbarBrand>
        </Navbar>
        <Players />
      </Fragment>
    );
  }
}

export default LifeCounter;
