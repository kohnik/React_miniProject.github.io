import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Badge,
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";

import { Link } from "react-router-dom";
import history from "./../history";
import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";
import { get } from "jquery";
//import {connect} from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "kohnik",
      password: "123456",
      modal: false,
    };
  }

  render() {
    let { modal } = this.state;
    return (
      <Container fluid="lg" className="loginContainer">
        <Form onSubmit={this.submit}>
          <FormGroup>
            <Label for="login">Login</Label>
            <Input
              type="text"
              name="login"
              id="login"
              placeholder="Введите ваш логин"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Введите ваш пароль"
            />
          </FormGroup>
          <Button>Вход</Button>
        </Form>
        {modal ? (
          <Modal isOpen={modal} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
              Вы ввели неправильный пароль
            </ModalHeader>
            <ModalBody>Попробуйте еще раз</ModalBody>
          </Modal>
        ) : null}
      </Container>
    );
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  submit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);

    if (
      data.get("login") == this.state.login &&
      data.get("password") == this.state.password
    ) {
      history.push("/profile");
      this.props.dispatch({
        type: "LOGIN",
        status: true,
      });
      localStorage.setItem("key", true);
      localStorage.setItem("name", "Kohnik ");
    } else {
      this.setState({
        modal: true,
      });

      // setTimeout(()=>{
      //     this.setState({
      //         modal:false
      //     })
      // },4000)
    }
  };
}
const mapLoginFromProps = (store) => {
  return {
    login: store.login,
  };
};

export default connect(mapLoginFromProps)(Login);
