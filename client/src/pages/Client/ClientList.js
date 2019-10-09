import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ClientCard from '../../components/ClientCard/ClientCard';

class ClientList extends Component {
	constructor() {
		super()
		this.state = {
      clients: {},
			// firstName: '',
      // lastName: '',
      // streetAddress1: '',
      // streetAddress2: '', 
      // city: '', 
      // state: '', 
      // ZIP: '', 
      // phone1: '',
      // phone1Type: '',
      // phone2: '',
      // phone2Type: '',
      // notes: '',
      // email: '', 
			// redirectTo: null
		}
		// this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    
    
  }
  
  componentWillMount() {
    axios
      .get('/api/clients')
      .then(response => {
        console.log('Hitting /api/client call');
        this.setState({ clients: response.data})
        console.log("this.state.client Data: ====+=+>", this.state.clients)
      })
      .catch(
        this.setState({ clients: [],
        message: "No Clients Found."
        })
      )
    
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
			<div className="ClientForm">
				<h1>Client List form</h1>
        {this.state.clients.map( client => (
          <ClientCard
            key={client.id}
            lastName={client.lastName}
            firstName={client.firstName}
            streetAddress1={client.streetAddress1}
            streetAddress2={client.streetAddress2}
            city={client.city}
            USState={client.state}
            ZIP={client.ZIP}
            phone1={client.phone1}
            phone1Type={client.phone1Type}
            phone2={client.phone2}
            phone2Type={client.phone2Type}
            notes={client.notes}
          />
        ))}
				
			</div>
		)
	}
}

export default ClientList
