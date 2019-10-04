import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Dropdown from 'react-dropdown';
import './NewClient.css';

const options = [
  'WA', 'OR', 'ID'
]

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
    this._onSelect = this._onSelect.bind(this);

    this.state.selected = "WA";
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
  }

  _onSelect (option) {
    console.log(option);
    console.log('You selected ', option.label);
    this.setState({selected: option, state: option.value});
  }

	handleSubmit(event) {
    if( !(this.state.firstName) ) {
      alert("First Name is required!")
      return;
    }
    if( !(this.state.lastName) ) {
      alert("Last Name is required!")
      return;
    }
    if( !(this.state.phone1) ) {
      alert("Phone number 1 is required!")
      return;
    }
    if(!!(this.state.email)) {
      if(!this.state.email.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/)) {
        alert("Incorrect email format!")
        return;
      }
    }
		event.preventDefault()
		// TODO - validate!
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
						redirectTo: '/client'
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
    const defaultOption = this.state.selected;
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
          {/* <input
            type="text"
            name="state"
            value={this.state.state}
            onChange={this.handleChange}
            />
            <span>State: </span> */}
          <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="WA" />
          <div className='result'>
            You selected
            <strong> {placeHolderValue} </strong>
          </div>
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
          <button onClick={this.handleSubmit}>Submit</button>
        </div> 
			</div> 
		)
	}
}

export default NewClientForm
