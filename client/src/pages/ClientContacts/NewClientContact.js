// NewClientContact.js
import React, { Component } from 'react'
import ClientSearchCard from '../../components/ClientSearchCard/ClientSearchCard'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import "./style.css"

class NewClientContact extends Component {
	constructor() {
		super()
		this.state = {
      contactDate: '',
      ExpressedNeed: '',
      helpProvided: '',
      dollarAmount: '', 
      giftCards: '', 
      notes: '',
      clientId: '',
      userId: '',
      clientNames: [],
      selectedClientName: '',
      redirectTo: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClientChange = this.handleClientChange.bind(this);
  }
  
	handleChange(event) {
    console.log("Handle Change Event. Value: ", event.target.value);
		this.setState({
			[event.target.name]: event.target.value
		})
  }
  
  handleClientChange(clientId, firstName, lastName) {
    console.log("clientId==> ", clientId);
    this.setState({clientId: clientId})
    axios
      .get("/api/client/" + clientId)
      .then(response => { console.log("hitting /api/clients (one) in Clients", response.data); 
        this.setState({clientNames: response.data});
        console.log("clients ==>>>> ", this.state.clientNames);
        this.setState({selectedClientName: `${response.data.lastName}, ${response.data.firstName}`})
        console.log("selectedClientName: ",this.state.selectedClientName);
      })
      .catch(
        this.setState({ clientNames: [],
        message: "No Contacts List Found."
        })
      );
    // this.setState({selectedClientName: `${lastName}, ${firstName}` });
  
  }
	handleSubmit(event) {
    if( !(this.state.clientId) ) {
      alert("Client Name is required!")
      return;
    }
    // if( !(this.state.lastName) ) {
    //   alert("Last Name is required!")
    //   return;
    // }
    // if( !(this.state.phone1) ) {
    //   alert("Phone number 1 is required!")
    //   return;
    // }
    // if(!!(this.state.email)) {
    //   if(!this.state.email.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/)) {
    //     alert("Incorrect email format!")
    //     return;
    //   }
    // }
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/api/ClientContact', {
        contactDate: this.state.contactDate,
        expressedNeed: this.state.expressedNeed,
        helpProvided: this.state.helpProvided,
        dollarAmount: this.state.dollarAmount,
        giftCards: this.state.giftCards,
        notes: this.state.notes,
        clientId: this.state.clientId,
        userId: this.state.userId
				  
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('SUCCESSFULLY added ClientContact to Database')
					this.setState({
						redirectTo: '/history'
					})
				} else {
					console.log('duplicate')
				}
			})
			.catch(err => {
				console.log("ClientContact Post ERROR: ", err)
			})
  }
  
  componentDidMount() {
    // TODO -- Get userId
    axios.get('/auth/user').then(response => {
			console.log("axios.get. response.data.user: ", response.data.user)
			if (!!response.data.user) {
				console.log("response.data.user.username ::>",response.data.user.username);
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					// user: response.user
          userId: response.data.user.id
        })
        
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
				console.log("NewClientContact componentDidMount. user: ", this.state.user);
			}
		})
  }

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="NewClientContactForm">
				<div className="container">
          <div className="row">
            <h1 className="col-sm-12 text-center bg-primary text-light">New Client Encounter</h1>
          </div>
          <div className="row p-1">
            <div className="col-sm-12">
            <ClientSearchCard 
              clientNames={this.state.clientNames}
              clientChange={this.handleClientChange}
            />
            <span>{this.state.selectedClientName}</span>
            </div>
          </div>
          <div className="row p-1">
            <div className="col-sm-12">
              <label className="mr-2" htmlFor="contactDate">Contact Date: </label>
              <input
                type="text"
                name="contactDate"
                placeholder="MM/DD/YYYY"
                value={this.state.contactDate}
                onChange={this.handleChange}
              />
            </div>
          </div> 
          <div className="row  p-1">
            <div className="col-sm-12">
              <label className="mr-2" htmlFor="expressedNeed">Expressed Need: </label>
              <input
                className="form-control express-need"
                type="text"
                name="expressedNeed"
                value={this.state.expressedNeed}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row  p-1">
            <div className="col-sm-12">
              <label className="mr-2" htmlFor="helpProvided">Help Provided: </label>
              <input
                className="form-control mr-2 clear-fix"
                placeholder=""
                type="text"
                name="helpProvided"
                value={this.state.helpProvided}
                onChange={this.handleChange}
                size="500"
                />
            </div>
          </div>
          <div className="row  p-1">
            <div className="col-sm-12">
              <label className="dollar-amt-lbl mr-2" htmlFor="dollarAmount">Dollar Amount: </label>
              <input
                className="dollar-amount form-control mr-0 col-sm-4"
                placeholder="$00.00"
                type="text"
                name="dollarAmount"
                value={this.state.dollarAmount}
                onChange={this.handleChange}
                size="20"
              />
              <label className="gift-card-lbl" htmlFor="giftCards">Gift Cards: </label>
              <input
                className="gift-card-input"
                type="text"
                name="giftCards"
                value={this.state.giftCards}
                onChange={this.handleChange}
                size="20"
              />
            </div>
          </div>
          <label htmlFor="notes">notes: </label>
          <input
            type="text"
            name="notes"
            value={this.state.notes}
            onChange={this.handleChange}
            />
          
          <button onClick={this.handleSubmit}>Submit</button>
        </div> 
			</div> 
		)
	}
}

export default NewClientContact
