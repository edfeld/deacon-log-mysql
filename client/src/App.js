import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter , Route, Link } from 'react-router-dom'
import LoginForm from './components/Login/LoginForm'
// import SignupForm from './components/SignupForm'
import Home from './pages/Home'
import Nav from './components/Nav'
import NewClientForm from './pages/Client/NewClient';
import ClientList from './pages/Client/ClientList';
import ClientContactsList from './pages/ClientContacts/ClientContactsList';


// import MasterModal from './components/AllModals/MasterModal'

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null,
			
			// currentModal: "",
			searchBar: "",
			searchResults: [],
			
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
		
	}

	// Used to get to the User page - Set the state of the user ID
	selectUserID = (id) => {
		id = id.toString();
		console.log("The passed in User id::::===:::> ", id);
		this.setState({selectedUserID: id});
		console.log("the state of SelectedUserID: ", this.state.selectedUserID);
	}
	// Used to get to the Single post page. Set the state of the parent Post ID
	
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log("axios.get. response.data: ", response.data)
			if (!!response.data.user) {
				console.log("response.data.user.username ::>",response.data.user.username);
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					// user: response.user
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
				console.log("componentDidMount. user: ", this.state.user);
			}
		})

	}

	_logout = () => {
		//event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login (username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

	searchDb = (e) => {
		e.preventDefault();
		console.log(this.state.searchBar)
		axios
			.get('/api/search/' + this.state.searchBar)
			.then(response => {
				console.log('this is the response: ', response.data);
				this.setState({
					searchBar: ""
				})
		})
	}


	// changeModal = (type) => {
	// 	if(type === ''){
	// 		document.getElementsByClassName('opacityTransition')[0].style.opacity = '0';
	// 		let that = this;
	// 		function x (){
	// 			that.setState({currentModal: type});
	// 		}
	// 		setTimeout(function(){
	// 			x()
	// 		}, 300)
		
	// 	}else{
	// 	 	this.setState({currentModal: type});
	// 	}
	// }

	render() {
		
		return (
			<div className="App" style={{height: '100%'}}>
				<Nav />
				<Route 
					exact 
					path="/" 
					render={() => 
						<div className='container'>
							<Home 
								user={this.state.user}  
								_logout={this._logout} 
								loggedIn={this.state.loggedIn} 
							/>
						</div>
					}
				/>
				<Route
					exact
					path="/login"
					render={() =>
						<div className='container'>
						
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>
						</div>
					}
				/>
				<Route 
					exact 
					path="/user"  // [ere] 20190205-1900
					render={(props) =>
						<div>
							
						
						</div>
					} 
				/>
				<Route 
					exact 
					path="/newclient"  
					render={(props) =>
						<NewClientForm />
					} 
				/>
				<Route 
					exact 
					path="/clients"  
					render={(props) =>
						<ClientList />
					} 
				/>
				<Route 
					exact 
					path="/history"  
					render={(props) =>
						<ClientContactsList />
					} 
				/>
				<Route 
					exact 
					path="/api/search/:tags"
					render={() =>
						<div>
							
							{/* <SearchResults
								results={this.state.searchResults}	
							/> */}
						</div>
					}  
					/>
				{/* <LoginForm _login={this._login} /> */}
			</div>
		)
	}
}

// Making the SOCKET App component
// class chat extends Component{
// 	constructor() {
// 		super()
// 	}
// }

// render() {
// 	return (
// 		<div>
// 			<p>Testing 100002</p>
// 		</div>
// 	)
// }


// server = app.listen(8080, function(){
//     console.log('server is running on port 8080')
// });

// io = socket(server);

// io.on('connection', (socket) => {
//     console.log(socket.id);

//     socket.on('SEND_MESSAGE', function(data){
//         io.emit('RECEIVE_MESSAGE', data);
//     })
// });

export default App;
