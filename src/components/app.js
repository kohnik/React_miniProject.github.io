import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "reactstrap";
import Header from "Comp/header";
import Home from "Comp/home";
import Page404 from "Comp/404";
import News from "Comp/news/news";
import Login from "Comp/login/login";
import Profile from "Comp/profile/profile";
import history from "Comp/history";
import { Router, Switch, Route } from "react-router-dom";
import Article from "Comp/home/article";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      login: false,
      status: false,
    };
  }

  render() {
    console.log(this.props);
    let { status } = this.state;
    return (
      <Fragment>
        {status == false ? this.statusToggle() : null}

        <Router history={history}>
          <Container fluid={true}>
            <Header />
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/article/id/:id"} component={Article} />
              <Route exact path={"/news"} component={News} />
              <Route exact path={"/profile"} component={Profile} />
              <Route exact path={"/login"} component={Login} />
              <Route component={Page404} />
            </Switch>
          </Container>
        </Router>
      </Fragment>
    );
  }

  status = () => {
    localStorage.getItem("key")
      ? this.props.dispatch({
          type: "LOGIN",
          status: true,
        })
      : null;

    console.log(this.props.login + "login");
  };

  statusToggle = () => {
    this.setState({
      status: true,
    });
    this.status();
  };
}

const mapLoginFromProps = (store) => {
  return {
    login: store,
  };
};

export default connect(mapLoginFromProps)(App);
