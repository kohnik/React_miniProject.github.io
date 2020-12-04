import React from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";

export default class CreateFormComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      user: null,
    };
  }

  render() {
    let { fnOk, fnCanсel } = this.props;
    return (
      <Form onSubmit={this.submit}>
        <FormGroup>
          <Label for="name">Ваше имя </Label>
          <Input type="text" name="name" id="name" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Ваша почта</Label>
          <Input type="email" name="email" id="email" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="comment">Ваш комментарий</Label>
          <Input
            type="textarea"
            name="comment"
            id="comment"
            placeholder="Напишите ваш комментарий"
          />
        </FormGroup>
        <FormGroup>
          <Button>Add</Button>
          <span onClick={fnCanсel} className={"btn btn-danger"}>
            Cancel
          </span>
        </FormGroup>
      </Form>
    );
  }

  submit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    if (
      data.get("name") != "" &&
      data.get("username") != "" &&
      data.get("comment") != ""
    ) {
      this.props.fnOk(data);
    }
  };
}
