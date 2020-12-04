import React, { Component, Fragment } from "react";
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

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      comments: null,
    };
  }

  render() {
    let { comment } = this.props;
    console.log(comment);
    return (
      <Fragment>
        <Card>
          <CardBody>
            <CardTitle>
              <Row>
                <Col lg="6">
                  <h5>{comment.name}</h5>
                </Col>
                <Col lg="6" className="text-right">
                  {comment.date}
                </Col>
              </Row>
              <Row>
                <Col lg="12">{comment.comments}</Col>
              </Row>
            </CardTitle>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}
