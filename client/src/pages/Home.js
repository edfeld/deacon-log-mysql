import React  from 'react' //{Component}
// import Nav from "../components/Nav"
// import Card from '../components/Card/Card';
import TitleBar from '../components/titleBar'


// TODO - add proptypes

const Home = props => {
      // console.log("props.selectPostID: ", props.selectPostID);
	if (props.user) {
            // props.allposts()
		return (
            <div style={{backgroundImage: "inherit"}}>
              {/* <Nav /> */}

              <div className="Home">
                    <p>Current User:  {(props.user)? props.user.username: ""}</p> 
                    <code>
                          {JSON.stringify(props.user)}
                    </code>
                    <h1>Hello User</h1>
              </div>
            </div>
		)
	} else{
            // props.allposts()
            console.log('posts in home ',props)
		return (
      <div style={{backgroundImage: "inherit"}}>
        <TitleBar />
        <div className="Home">
              <p>Current User:  {(props.user ? props.user.username : "")}</p>
              <code>
                    {JSON.stringify(props)}
              </code>
              <h1>Home Page</h1>
        </div>
      </div>
		)
	}
}

export default Home
