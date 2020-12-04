// import React, {Component, Fragment} from "react";
// import UserItem from "./item";
// import UserCreateForm from "./forms/create";
// import {Spinner, Row, Col, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
// import { connect } from "react-redux";


//  class Users extends Component{

//     constructor(props){
//         super(props);
//         this.state={
//             items:[],
//             modal : false,
//         }

//     }

//     render(){
//         let {items,modal} = this.state;
//         return(
//         <Fragment>
//              <Row>
//                 <Col lg={6}><h1>Users</h1></Col>
//                 <Col lg={6} className={"text-right"}><Button onClick={this.modalToggle}>add user</Button></Col>

//             </Row>
//              {
//                 items.length>0 ?
//                 items.map((item)=><UserItem info={item} key={item.id}/>)  :
//              <  Spinner />
//             }
            
//             {this.props.modal?this.props.modal:null}
//             {console.log(this.props.modal)}
//          </Fragment>
//         )
//     }
//     modalToggle = () =>{
//         this.props.dispatch({
//             type:"MODAL",
//             status:true,
//             footer:null,
//             text:"Add new user",
//             body: <UserCreateForm fnCancel={()=>{this.props.dispatch({
//                 type:"MODAL",
//                  status:false})}}  fnOk={this.addUser}/>,

//             fn : ()=>
//             {        return  this.props.dispatch({
//                       type:"MODAL",
//                        status:false})
//             }
//         })

       
//     }

//     // modalToggle = () =>{
//     //     this.setState({
//     //         modal : !this.state.modal
//     //     })
//     // }

//     addUser = (data) =>{
//         this.setState({
//             items : [{
//                 username : data.get("username"),
//                 name : data.get("name"),
//             },...this.state.items],
//         })
//         this.props.dispatch({
//             type:"NEW_USER",
//              status:false})
//     }



//     componentDidMount(){


//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(data=>data.json())
//             .then(users=>{

//                 this.setState({
//                     items: [...users]
//                 })
//             })
//             .catch(error=>console.log(error));

//     }




// }


// const module=(store)=>
// {
//     return {
//         modal: store.modal
//     }
// }

// export default connect(module)(Users)