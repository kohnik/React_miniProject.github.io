import React, { Fragment } from "react";
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
} from "reactstrap";

import { Link } from "react-router-dom";

import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";
import putin from "./../../images/putin.jpg";
//import {connect} from "react-redux";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col fluid="6">
            <img src={putin} className="img_putin"></img>{" "}
          </Col>
          <Col fluid="6">Личная информация</Col>
        </Row>
        <Row>
          {" "}
          <Col fluid="12">Лол,тот еще гений</Col>
        </Row>
      </Fragment>
    );
  }
}

// const mapStateFromProps = (store)=>{

//     return {
//         posts: store
//     }
// }

// export default connect(mapStateFromProps)(PostItem);
