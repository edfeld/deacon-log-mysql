// NewClientContact.js
import React, { Component } from 'react'
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
      redirectTo: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
    // if( !(this.state.firstName) ) {
    //   alert("First Name is required!")
    //   return;
    // }
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

				// firstName: this.state.firstName, 
        // lastName: this.state.lastName,
        // streetAddress1: this.state.streetAddress1,
        // streetAddress2: this.state.streetAddress2, 
        // city: this.state.city, 
        // state: this.state.state, 
        // ZIP: this.state.ZIP, 
        // phone1: this.state.phone1,
        // phone1Type: this.state.phone1Type,
        // phone2: this.state.phone2,
        // phone2Type: this.state.phone2Type,
        // notes: this.state.notes,  
        // email: this.state.email  
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
				console.log("GOOGLE OAUTH ERROR: ", err)
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
            <h1 className="col-sm-12 text-center bg-primary text-light">New Client Contact</h1>
          </div>
          <div className="row p-1">
            <div className="col-sm-12">
              <label className="mr-2" htmlFor="firstName">Contact Date: </label>
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
          <label htmlFor="Notes">Notes: </label>
          <input
            type="text"
            name="Notes"
            value={this.state.Notes}
            onChange={this.handleChange}
            />
          
          <button onClick={this.handleSubmit}>Submit</button>
        </div> 
			</div> 
		)
	}
}

export default NewClientContact
