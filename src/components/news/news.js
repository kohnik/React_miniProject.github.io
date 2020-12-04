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
//import {connect} from "react-redux";
import NewsItem from "./newsitem";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
    };
  }

  render() {
    let { news } = this.state;
    {
      news == null ? this.fetch() : null;
    }

    return (
      <Fragment>
         <Row className="category">
          <Col lg="3">По какой катеогрии вы ищите статью?</Col>
          <Col lg="9">
            <ButtonGroup>
              <Button onClick={() => this.ChooseCategory("cooking")}>
                Cooking
              </Button>
              <Button onClick={() => this.ChooseCategory("criminal")}>
                Criminal
              </Button>
              <Button onClick={() => this.ChooseCategory("horror")}>
                Horror
              </Button>
              {/* <Button onClick={() => this.ChooseCategory("all")}>
                All
              </Button> */}
            </ButtonGroup>
          </Col>
        </Row>
        {news ? (
          news.map((item) => <NewsItem newsItem={item} key={item.id} />)
        ) : (
          <Row>
            <Col fluid="12" className="text-center">
              <Spinner />
            </Col>
          </Row>
        )}
      </Fragment>
    );
  }
  fetch() {
    console.log(324444444);
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
        news: item,
      })
    );
  }
  ChooseCategory = (categ) => {
  

    console.log(this.state.news);

   
    this.setState({
      news: [
        ...this.state.news.filter((item) => {
          if (item.category == categ) return item;
        }),
        ...this.state.news.filter((item) => {
          if (item.category != categ) return item;
        }),
      ],
    });

    console.log(this.state.news);
  };
}

