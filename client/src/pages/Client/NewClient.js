import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Dropdown from 'react-dropdown';
import USStates from '../../USStates.json';
import './NewClient.css';

// const options = [
//   'WA', 'OR', 'ID'
// ]
const optionsPhoneType = [ "Mobile", "Home",  "Work", "Other" ];

const optionsStates = USStates;
// console.log(options);
class NewClientForm extends Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
      lastName: '',
      streetAddress1: '',
      streetAddress2: '', 
      city: '', 
      state: '', 
      ZIP: '', 
      phone1: '',
      phone1Type: '',
      phone2: '',
      phone2Type: '',
      notes: '',
      email: '', 
      selected: '',
			redirectTo: null
    }
		this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this._onSelectState = this._onSelectState.bind(this);
    this._onSelectPhone1Type = this._onSelectPhone1Type.bind(this);
    this._onSelectPhone2Type = this._onSelectPhone2Type.bind(this);

    this.state.selected = "";
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
  }

  _onSelectState (option) {
    // console.log(option);
    console.log('You selected State, ', option.label);
    this.setState({state: option.value});
  }

  _onSelectPhone1Type (phoneType) {
    // console.log(phoneType);
    console.log('You selected Phone 1 Type: ', phoneType.label);
    this.setState({selected: phoneType, phone1Type: phoneType.value});
  }

  _onSelectPhone2Type (phoneType) {
    // console.log(phoneType);
    console.log('You selected Phone 2 Type: ', phoneType.label);
    this.setState({selected: phoneType, phone2Type: phoneType.value});
  }
  
	handleSubmit(event) {
    // TODO - validate!
    if( !(this.state.firstName) ) {
      alert("First Name is required!")
      return;
    }
    if( !(this.state.lastName) ) {
      alert("Last Name is required!")
      return;
    }
    if( !this.state.state ) {
      alert("State has not been selected!")
      return
    }
    if( !((this.state.ZIP.length === 5) || (this.state.ZIP.length === 9 ))) {
      alert("ZIP must be 5 or 9 digits!");
      return;
    }
    if( !(this.state.phone1) ) {
      alert("Phone number 1 is required!")
      return;
    }
    if ( !(this.state.phone1.length === 10 )) {
      alert("Phone number 1 must be 10 digits!")
      return;
    }
    if ( (this.state.phone2) && !(this.state.phone2.length === 10 )) {
      alert("Phone number 2 must be 10 digits!")
      return;
    }
    if(!!(this.state.email)) {
      if(!this.state.email.match(/^([\w.-]+)@([\w-]+)((.(\w){2,3})+)$/)) {
      // if(!this.state.email.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/)) {
        alert("Incorrect email format!")
        return;
      }
    }
		event.preventDefault()
		axios
			.post('/api/Client', {
				firstName: this.state.firstName, 
        lastName: this.state.lastName,
        streetAddress1: this.state.streetAddress1,
        streetAddress2: this.state.streetAddress2, 
        city: this.state.city, 
        state: this.state.state, 
        ZIP: this.state.ZIP, 
        phone1: this.state.phone1,
        phone1Type: this.state.phone1Type,
        phone2: this.state.phone2,
        phone2Type: this.state.phone2Type,
        notes: this.state.notes,  
        email: this.state.email  
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('SUCCESSFULLY added to Database')
					this.setState({
						redirectTo: '/clients'
					})
				} else {
					console.log('duplicate')
				}
			})
			.catch(err => {
        console.log("Database Error, Client Post ", err);
        alert("Error Adding Client to the database. Error:", err);
			})
	}
	render() {
    const defaultOptionState = this.state.state;
    console.log("defaultOptionState: ", defaultOptionState);
    const defaultOptionPhone1Type = this.state.phone1Type;
    const defaultOptionPhone2Type = this.state.phone2Type;
    console.log("defaultOptionPhone1Type: ", defaultOptionPhone1Type)
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;

		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="NewClientForm">
				<div className="container">
          <div className="row">
            <h1 className="col-sm-12 text-center bg-primary text-light">New Client form</h1>
          </div>
          <div className="row p-1">
            <div className="col-sm-12">
              <label className="mr-2" htmlFor="firstName">First Name: </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
          </div> 
          <div className="row  p-1">
            <div className="col-sm-12">
              <label className="mr-2" htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row  p-1">
            <div className="col-sm-12">
              {/* <label className="mr-2" htmlFor="streetAddress1"></label> */}
              <input
                className="form-control mr-2"
                placeholder="Address 1"
                type="text"
                name="streetAddress1"
                value={this.state.streetAddress1}
                onChange={this.handleChange}
                />
            </div>
          </div>
          <div className="row  p-1">
            <div className="col-sm-12">
              {/* <label className="mr-2" htmlFor="streetAddress2"></label> */}
              <input
                className="form-control mr-2"
                placeholder="Address 2"
                type="text"
                name="streetAddress2"
                value={this.state.streetAddress2}
                onChange={this.handleChange}
                size="100"
                />
            </div>
          </div>
          <label className="mr-2"  htmlFor="city">City: </label>
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            />
          <label htmlFor="state">State: </label>
          {/* This drop down came from https://github.com/fraserxu/react-dropdown */}
          <Dropdown options={optionsStates} onChange={this._onSelectState} value={this.state.state} placeholder="Select" />
          {/* <div className='result'>
            You selected
            <strong> {placeHolderValue} </strong>
          </div> */}
          <label htmlFor="ZIP">ZIP: </label>
          <input className="zip"
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
          <Dropdown options={optionsPhoneType} onChange={this._onSelectPhone1Type} value={defaultOptionPhone1Type} placeholder="Select type" />
          {/* <input
            type="text"
            name="phone1Type"
            value={this.state.phone1Type}
            onChange={this.handleChange}
            /> */}
          <label htmlFor="phone2">Phone 2: </label>
          <input
            type="text"
            name="phone2"
            value={this.state.phone2}
            onChange={this.handleChange}
            />
          <label htmlFor="phone2Type">Phone 2 Type: </label>
          <Dropdown options={optionsPhoneType} onChange={this._onSelectPhone2Type} value={defaultOptionPhone2Type} placeholder="Select type" />
          {/* <input
            type="text"
            name="phone2Type"
            value={this.state.phone2Type}
            onChange={this.handleChange}
            /> */}
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
          <button onClick={this.handleSubmit}>Submit</button>
        </div> 
			</div> 
		)
	}
}

export default NewClientForm
