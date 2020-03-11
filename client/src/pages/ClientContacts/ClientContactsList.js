import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ClientContactCard from '../../components/ClientContactCard/ClientContactCard';
import ClientSearchCard from '../../components/ClientSearchCard/ClientSearchCard';

class ClientContactList extends Component {
	constructor() {
		super()
		this.state = {
      clientContacts: [],
      clientNames: [],
      selectClientName: {}
			
		}
		// this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.handleClientChange = this.handleClientChange.bind(this);
    
  }
  
  componentDidMount() {
    // Get all clients
    axios
    .get("/api/clients")
    .then(response => { console.log("hitting /api/clients (all) in Clients"); 
      this.setState({clientNames: response.data});
      console.log("clients ==>>>> ", this.state.clientNames);
    })
    .catch(
      this.setState({ client: [],
      message: "No Contacts List Found."
      })
    );
    axios
    .get('/api/clientContacts')
    .then(response => {
      console.log('Hitting /api/clientContacts call');
      this.setState({ clientContacts: response.data});
      console.log("this.state.clientContacts Data: ====+=+>", this.state.clientContacts);
    })
    .catch(
      this.setState({ clientContacts: [],
      message: "No ClientContacts List Found."
      })
    );
  }

  handleClientChange(clientId) {
    console.log("clientId==> ", clientId);
    axios
      .get('/api/clientContacts/' + clientId)
      .then(response => {
        console.log('Hitting /api/clientContacts/:clientId call');
        this.setState({ clientContacts: response.data});
        console.log("this.state.clientContacts Data CCL: ===+=+=+>", this.state.clientContacts);
      })
      .catch(
        this.setState({ clientContacts: [],
        message: "No ClientContacts List Found."
        })
      );
  }
	// handleChange(event) {
	// 	this.setState({
	// 		[event.target.name]: event.target.value
	// 	})
	// }
	// handleSubmit(event) {
  //   if( !(this.state.firstName) ) {
  //     alert("First Name is required!")
  //     return;
  //   }
  //   if( !(this.state.lastName) ) {
  //     alert("Last Name is required!")
  //     return;
  //   }
  //   if( !(this.state.phone1) ) {
  //     alert("Phone number 1 is required!")
  //     return;
  //   }
  //   if(!!(this.state.email)) {
  //     if(!this.state.email.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/)) {
  //       alert("Incorrect email format!")
  //       return;
  //     }
  //   }
	// 	event.preventDefault()
	// 	// TODO - validate!
		
	// }
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="ClientContactsForm">
				<h3>Client Encounters</h3>
        <ClientSearchCard 
          clientNames={this.state.clientNames}
          clientChange={this.handleClientChange}
        />
        <div className="container">
        {this.state.clientContacts.map( clientContacts => (
          <ClientContactCard
            key={clientContacts.id}
            lastName={clientContacts.client.lastName}
            firstName={clientContacts.client.firstName}
            contactDate={clientContacts.contactDate}
            expressedNeed={clientContacts.expressedNeed}
            helpProvided={clientContacts.helpProvided}
            dollarAmount={clientContacts.dollarAmount}
            notes={clientContacts.notes}
          />
        ))}
        </div>{/* container */}
				
			</div>
		)
	}
}

export default ClientContactList
