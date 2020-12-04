import React from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import history from "./history";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link
            className="navbar-brand"
            style={{ textDecoration: "none", color: "rgb(109, 104, 104)" }}
            to={"/"}
          >
            На главную
          </Link>

          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link
                className="nav-link"
                style={{
                  textDecoration: "none",
                  color: "rgb(109, 104, 104)",
                }}
                to={"/news"}
              >
                Новости
              </Link>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.direction} className="LinkNews">
                Профиль
              </NavLink>
            </NavItem>
          </Nav>

          <NavbarText>
            {this.props.login.status
              ? `${localStorage.getItem("name")}-->`
              : "Task1 from React"}
          </NavbarText>
          <NavbarText>
            {this.props.login.status ? (
              <Button onClick={this.toggleLocalStorage}>Выйти</Button>
            ) : null}
          </NavbarText>
        </Navbar>
      </div>
    );
  }

  direction = () => {
    console.log(this.props.login.status);
    this.props.login.status ? history.push("/profile") : history.push("/login");
  };
  toggleLocalStorage = () => {
    this.props.dispatch({
      type: "LOGIN",
      status: false,
    });
    localStorage.removeItem("key");
    localStorage.removeItem("name");
  };
}

const mapLoginFromProps = (store) => {
  return {
    login: store.login,
  };
};

export default connect(mapLoginFromProps)(Header);
