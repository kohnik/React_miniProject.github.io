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

export default class HomeItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: null,
    };
  }

  render() {
    let { article } = this.props;
    return (
      <Fragment>
        <Card>
          <CardBody>
            <CardTitle>
              <Row>
                <Col lg="12">{<h3>{article.Title}</h3>}</Col>
              </Row>

              <Row>
                <Col lg="3">
                  <img
                    src={`https://newsinfo-b188.restdb.io/media/${article.img[0]}`}
                    className="preview_img"
                  ></img>
                </Col>
                <Col lg="8" className="text-left">
                  {article.first_text}
                  {localStorage.getItem("key") ? (
                    <Link to={`/article/id/${article.id}`}>
                      {" "}
                      Читать больше...{" "}
                    </Link>
                  ) :<Link to="/login">   Авторизуйтесь, чтобы читать подробнее...</Link> }
                </Col>
                <Col lg="1" className="text-rigth">
                  <Badge color="secondary"> {article.status} </Badge>
                </Col>
              </Row>
            </CardTitle>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}
