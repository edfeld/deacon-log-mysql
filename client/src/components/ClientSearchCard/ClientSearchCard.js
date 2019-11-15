import React, { Component } from "react";
import axios from 'axios';
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

class ClientSearchCard extends Component {
	constructor() {
		super()
		this.state = {
      clientNames: []
			
		}
  }

  componentWillMount() {
    axios
      .get("/api/clients")
      .then(response => { console.log("hitting /api/clients (all) in Clients"); 
        this.setState({clientNames: response.data});
        console.log("clients ==>>>> ", this.state.clientNames);
      })
      .catch(
        this.setState({ clientNames: [],
        message: "No Contacts List Found."
        })
      );
  }

  render() {
    console.log("clientNames on ClientSearchCard ===++++>", this.state.clientNames[0]);
    return (
      <div className="container bg-white">
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Contacts
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            { this.state.clientNames.map( client => (
              <li className="sel-client-name" key={client.id} onClick={()=> this.props.clientChange(client.id)}>{client.lastName}, {client.firstName}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// function ClientSearchCard( props ) {
//   console.log("props ClientSearchCard ===++++>", props.clientNames[0]);
//   // props.clientNames.map( client => (
//   //   console.log("client: ", client)
//   // ))
//   return (
//     <div class="container bg-white">
//       <h2>Dropdowns</h2>
//       <p>The .divider class is used to separate links inside the dropdown menu with a thin horizontal line:</p>
//       <div class="dropdown">
//         <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Contacts
//         <span class="caret"></span></button>
//         <ul class="dropdown-menu">
//           {/* { props.data.map( client => (
//             <li key={client.id}>{client.lastName}, {client.firstName}</li>
//           ))} */}
//           {/* <li><a href="#">HTML</a></li>
//           <li><a href="#">CSS</a></li>
//           <li><a href="#">JavaScript</a></li>
//           <li class="divider"></li>
//           <li><a href="#">About Us</a></li> */}
//         </ul>
//       </div>
//     </div>
//   );
// }

export default ClientSearchCard;