import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ClientContactCard from '../../components/ClientContactCard/ClientContactCard';

class ClientContactList extends Component {
	constructor() {
		super()
		this.state = {
      clientContacts: {},
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
      .get('/api/clientContacts')
      .then(response => {
        console.log('Hitting /api/clientContacts call');
        this.setState({ clientContacts: response.data})
        console.log("this.state.clientContacts Data: ====+=+>", this.state.clientContacts)
      })
      .catch(
        this.setState({ clientContacts: [],
        message: "No ClientContacts List Found."
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
			<div className="ClientContactsForm">
				<h3>Client Encounters List form</h3>
        {this.state.clientContacts.map( clientContacts => (
          <ClientContactCard
            key={clientContacts.id}
            lastName={clientContacts.client.lastName}
            firstName={clientContacts.client.firstName}
            contactDate={clientContacts.contactDate}
            expressedNeed={clientContacts.expressedNeed}
            helpProvided={clientContacts.helpProvided}
          />
        ))}
				{/* <h1>New Client form</h1>
				<label htmlFor="firstName">First Name: </label>
				<input
					type="text"
					name="firstName"
					value={this.state.firstName}
					onChange={this.handleChange}
				/>
				<label htmlFor="lastName">Last Name: </label>
				<input
					type="text"
					name="lastName"
					value={this.state.lastName}
					onChange={this.handleChange}
				/>
        <label htmlFor="streetAddress1">Street Address 1: </label>
        <input
          type="text"
          name="streetAddress1"
          value={this.state.streetAddress1}
          onChange={this.handleChange}
        />
        <label htmlFor="streetAddress2">Street address 2: </label>
        <input
          type="text"
          name="streetAddress2"
          value={this.state.streetAddress2}
          onChange={this.handleChange}
        />
        <label htmlFor="city">City: </label>
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <label htmlFor="state">State: </label>
        <input
          type="text"
          name="state"
          value={this.state.state}
          onChange={this.handleChange}
        />
        <label htmlFor="ZIP">ZIP: </label>
        <input
          type="text"
          name="ZIP"
          value={this.state.ZIP}
          onChange={this.handleChange}
        />
        <label htmlFor="phone1">Phone number 1: </label>
        <input
          type="text"
          name="phone1"
          value={this.state.phone1}
          onChange={this.handleChange}
        />
        <label htmlFor="phone1Type">Phone 1 Type: </label>
        <input
          type="text"
          name="phone1Type"
          value={this.state.phone1Type}
          onChange={this.handleChange}
        />
        <label htmlFor="phone2">Phone 2: </label>
        <input
          type="text"
          name="phone2"
          value={this.state.phone2}
          onChange={this.handleChange}
        />
        <label htmlFor="phone2Type">Phone 2 Type: </label>
        <input
          type="text"
          name="phone2Type"
          value={this.state.phone2Type}
          onChange={this.handleChange}
        />
        <label htmlFor="notes">Additional Notes: </label>
        <input
          type="text"
          name="notes"
          value={this.state.notes}
          onChange={this.handleChange}
        />
				<label htmlFor="email">Email address: </label>
				<input
					type="text"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit}>Submit</button> */}
			</div>
		)
	}
}

export default ClientContactList
