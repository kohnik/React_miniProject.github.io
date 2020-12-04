import React, { Component, Fragment } from "react";
import HomeItems from "./homeItems";
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
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copyArticle: null,
      articles: null,
    };
  }

  render() {
    let { articles } = this.state;
    {
      articles == null ? this.fetch() : null;
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

        {articles ? (
          articles.map((item) => item.status=="NEW"? <HomeItems article={item} key={item.id} />:null)
        ) : (
          <Row>
            <Col lg="12" className="text-center">
              <Spinner />
            </Col>
          </Row>
        )}
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
        articles: item,
        copyArticle: item,
      })
    );
  }

  ChooseCategory = (categ) => {
    console.log(this.state.copyArticle);

    console.log(this.state.articles);

   
    this.setState({
      articles: [
        ...this.state.articles.filter((item) => {
          if (item.category == categ) return item;
        }),
        ...this.state.articles.filter((item) => {
          if (item.category != categ) return item;
        }),
      ],
    });

    console.log(this.state.articles);
  };
}
