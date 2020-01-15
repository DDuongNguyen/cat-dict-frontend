import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CatList from "./components/catlist";

export default class App extends Component {
  state = {
    catArr: []
  };

  componentDidMount() {
    fetch("http://127.0.0.1:42069/felinelist")
      .then(resp => resp.json())
      .then(data => this.setState({ catArr: data }));
  }

  render() {
    
    return (
      <div className="App row">
        <div
          className="col-12 mt-0 my-auto mx-auto no-gutters"
          style={{ height: "10vh", width: "100vw", backgroundColor: "red" }}
        >
          <h1 className="font-weight-bolder text-uppercase text-center mt-0 my-auto">
            THE CAAT APP
          </h1>

          <CatList data={this.state.catArr} />
        </div>
      </div>
    );
  }
}
