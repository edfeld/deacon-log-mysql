import React from 'react';
import "./titleBar.css";

const titleBar = props => (
    <header className="titleBar">
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Deacon Drop In Log</h1>
            <p className="lead">Serving those in need</p>
        </div>
        </div>
    </header>
);

export default titleBar;