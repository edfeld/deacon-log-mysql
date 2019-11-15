import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          Deacon Log
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Encounters
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/newEncounter" ? "nav-link active" : "nav-link"}
                  to="/newEncounter"
                >
                  New Encounter
                </Link>
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/history" ? "nav-link active" : "nav-link"}
                  to="/history"
                >
                  Encounter History
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/clients" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Clients
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/newClient" ? "nav-link active" : "nav-link"}
                  to="/newClient"
                >
                  New Client
                </Link>
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/clients" ? "nav-link active" : "nav-link"}
                  to="/clients"
                >
                  View Clients
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                onClick={this.props._logout}
                className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
