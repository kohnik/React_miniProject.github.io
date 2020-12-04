import React, {Fragment} from "react";
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
  Media,
} from "reactstrap";

import { Link } from "react-router-dom";

import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";
//import {connect} from "react-redux";

export default class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
      photo: null,
    };
  }

  render() {
    let { newsItem, img } = this.props;
    let { photo } = this.state;

    

    return (
                  <Fragment>
                    <Card>
                      <CardBody>
                        <CardTitle>
                          <Row>
                            <Col lg="12">{<h3>{newsItem.Title}</h3>}</Col>
                          </Row>
            
                          <Row>
                            <Col lg="3">
                              <img
                                src={`https://newsinfo-b188.restdb.io/media/${newsItem.img[0]}`}
                                className="preview_img"
                              ></img>
                            </Col>
                            <Col lg="8" className="text-left">
                              {newsItem.first_text}
                              {localStorage.getItem("key") ? (
                                <Link to={`/article/id/${newsItem.id}`}>
                                  {" "}
                                  Читать больше...{" "}
                                </Link>
                              ) :<Link to="/login">   Авторизуйтесь, чтобы читать подробнее...</Link> }
                            </Col>
                            <Col lg="1" className="text-rigth">
                              <Badge color="secondary"> {newsItem.status} </Badge>
                            </Col>
                          </Row>
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </Fragment>
                );



  } 
}
//     return (
//       <Card>
//         <CardBody>
//           <CardTitle tag="div">
//             <Media>
//               <Media left href="#">
//                 <Media
//                   src={`https://newsinfo-b188.restdb.io/media/${this.props.newsItem.img[0]}`}
//                   alt="Generic placeholder image"
//                 />
//                 {/* <img src={`https://newsinfo-b188.restdb.io/media/${this.props.newsItem.img[0]}`}/> */}
//               </Media>
//               <Media body>
//                 <Media heading>{newsItem.preview}</Media>
//                 {newsItem.full_text}
//               </Media>
//             </Media>
//           </CardTitle>
//         </CardBody>
//       </Card>
//     );
//     render() {
//         let { article } = this.props;
//         return (
//           <Fragment>
//             <Card>
//               <CardBody>
//                 <CardTitle>
//                   <Row>
//                     <Col lg="12">{<h3>{article.Title}</h3>}</Col>
//                   </Row>
    
//                   <Row>
//                     <Col lg="3">
//                       <img
//                         src={`https://newsinfo-b188.restdb.io/media/${article.img[0]}`}
//                         className="preview_img"
//                       ></img>
//                     </Col>
//                     <Col lg="8" className="text-left">
//                       {article.first_text}
//                       {localStorage.getItem("key") ? (
//                         <Link to={`/article/id/${article.id}`}>
//                           {" "}
//                           Читать больше...{" "}
//                         </Link>
//                       ) :<Link to="/login">   Авторизуйтесь, чтобы читать подробнее...</Link> }
//                     </Col>
//                     <Col lg="1" className="text-rigth">
//                       <Badge color="secondary"> {article.status} </Badge>
//                     </Col>
//                   </Row>
//                 </CardTitle>
//               </CardBody>
//             </Card>
//           </Fragment>
//         );
//       }

//   }
// }
