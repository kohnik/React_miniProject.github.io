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
import Comment from "./../comments/comment";
import CreateFormComment from "./../comments/createFormComment";

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      comments: null,
      setForm: false,
      modal: false,
    };
  }

  render() {
    let { article } = this.props;
    let { info, comments, setForm, modal } = this.state;
    let key = 0;
    info == null && comments == null ? this.fetch() : null;
    let { id } = this.props.match.params;
    console.log(id);
    console.log(comments);
    return (
      <Fragment>
        {info ? (
          info.map((item) =>
            id == item.id ? (
              <Card key={item.id}>
                <CardBody>
                  <CardTitle>
                    <Row>
                      <h1>{item.Title}</h1>
                    </Row>
                    <Row>
                      {item.img_array.map((photo) => (
                        <Col lg={3} key={key++}>
                          <img
                            src={`https://newsinfo-b188.restdb.io/media/${photo}`}
                            className="preview_img"
                          />
                        </Col>
                      ))}
                    </Row>
                    <Row>
                      <Col lg={12}>{item.second_text}</Col>
                    </Row>
                    <Row>
                      <Col lg={12}>{<h3>Комментарии</h3>}</Col>
                      <Col lg={12}>
                        <Button color="success" onClick={this.toggleForm}>
                          Добавить комментарий
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        {setForm ? (
                          <CreateFormComment
                            fnOk={this.addComment}
                            fnCanсel={this.toggleForm}
                          />
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {" "}
                        {comments ? (
                          comments.map((item) =>
                            item.articleid == id ? (
                              <Comment comment={item} key={item.id} />
                            ) : null
                          )
                        ) : (
                          <Spinner />
                        )}
                      </Col>
                    </Row>
                  </CardTitle>
                </CardBody>
              </Card>
            ) : null
          )
        ) : (
          <Row>
            <Col lg="12" className="text-center">
              <Spinner />
            </Col>
          </Row>
        )}

        {modal ? (
          <Modal isOpen={modal} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
              Вы не авторизованы
            </ModalHeader>
            <ModalBody>Перейдите в профиль и авторизуйтесь</ModalBody>
          </Modal>
        ) : null}
      </Fragment>
    );
  }

  fetch() {
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://newsinfo-b188.restdb.io/rest/article",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5fc62c784af3f9656800d138",
        "cache-control": "no-cache",
      },
    };
    $.ajax(settings).done((item) =>
      this.setState({
        info: item,
      })
    );
    var settingsComment = {
      async: true,
      crossDomain: true,
      url: " https://newsinfo-b188.restdb.io/rest/comments",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": "5fc62c784af3f9656800d138",
        "cache-control": "no-cache",
      },
    };
    $.ajax(settingsComment).done((item) =>
      this.setState({
        comments: item,
      })
    );
  }

  addComment = (data) => {
    let { id } = this.props.match.params;
    console.log(id + " LOOOOOOOL");
    console.log(data.get("name"));

    this.setState({
      comments: [
        {
          name: data.get("name"),
          articleid: id,
          comments: data.get("comment"),
        },
        ...this.state.comments,
      ],
    });
  };

  toggleForm = () => {
    localStorage.getItem("key")
      ? this.setState({
          setForm: !this.state.setForm,
        })
      : this.toggleModal();
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  componentDidMount() {}
}
