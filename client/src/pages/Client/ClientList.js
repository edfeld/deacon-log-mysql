import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ClientCard from '../../components/ClientCard/ClientCard';
import "./ClientList.css";

class ClientList extends Component {
	constructor(props) {
		super(props)
		this.state = {
      clients: [],
      // loggedIn: false,
      message: '',
      redirectTo: null
      // user: this.props.user,
      // loggedIn: this.props.loggedIn
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
    }
    // Comment this out for Prod
    // if (window.performance) {
    //   if (performance.navigation.type == 1) {
    //     alert( "This page is reloaded" );
    //   } else {
    //     alert( "This page is not reloaded");
    //   }
    // }
    
    // this.setState({ loggedIn: this.props.loggedIn });
    // console.log("ClientList user loggedIn: ", this.state.loggedIn);
		// this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    console.log("ClientList - Constructor")
    console.log("clientList 1 - loggedIn: ", props.loggedIn);
    
  }
  
  componentDidMount() {
    console.log("clientList -> ComponentDidMount");
    console.log("clientList 2 - loggedIn:", this.props.loggedIn);
    console.log("clientList 2 - this.props.usesr: ", this.props.user);
    
    // this.setState({loggedIn: this.props.loggedIn})
    if (this.props.user) {
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

    window.onbeforeunload = function() {
      this.onUnload();
      return "";
    }.bind(this);
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
    console.log("ClientList - render clients: ", this.state.clients);
    console.log("this.state.clients is Length= ", this.state.clients.length);
    // console.log("clients")
    console.log("sessionStorage.getItem('clients'):", sessionStorage.getItem('clients'));
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    
    // if (this.props.loggedIn  &&  (Object.keys(this.state.clients).length > 0)) {
      return ( 
        <div className="ClientForm">
          {/* Taken from home.js */}
          {(this.props.user) ?
		        (
              <div style={{backgroundImage: "inherit"}}>
                {/* <Nav /> */}

                <div className="Undefined">
                      <p>Current Users: {this.props.user.username}</p> 
                      {/* <code>
                            {JSON.stringify(this.props.user)}
                      </code> */}
                </div>
              </div>
		        ):
            // props.allposts()
            // console.log('posts in clients ',this.props)
		        (
              <div style={{backgroundImage: "inherit"}}>
                {/* <TitleBar /> */}
                <div className="clients">
                      <p>Current User:  {this.props.user.username}</p>
                      {/* <code>
                            {JSON.stringify(this.props)}
                      </code> */}
                </div>
              </div>
		        )
	        }
          <h1 className="title">Client List</h1>
          <div className="container">
            {(this.state.clients.length)?
              (
                this.state.clients.map( client => (
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
              )) 
              ):(<div>Log In!</div>)
            }
          </div>
        </div>
      )
    
  }
}

export default ClientList
