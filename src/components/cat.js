import React, { Component } from "react";
import { FaHeart, FaTrash, FaTools } from "react-icons/fa";
import UpdatePop from "./update-pop";

export default class Cat extends Component {
  state = {
    iconColor: "gray"
  };

  changeColor = () => {
    this.state.iconColor === "gray"
      ? this.setState({ iconColor: "red" })
      : this.setState({ iconColor: "gray" });
  };

  handleDelete = () => {
    let catId = this.props.catdata.id;
    //  debugger
    fetch(`http://127.0.0.1:42069/feline/${catId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: catId
      })
    })
      .then(alert("it got deleted"))
      .then(window.location.reload());
  };

  render() {
    const { image_url, name, breed, sex, age } = this.props.catdata;
    console.log(this.props.catdata);

    return (
      <div className="card col-3 m-auto p-3 shadow-lg">
        <img
          className="card-img-top text-align-center img-fluid"
          src={image_url}
          style={{ width: "500px", height: "400px" }}
        />
        <div className="card-body">
          <h4 className="card-title text-black text-capitalize ">{name}</h4>

          <UpdatePop catId={this.props.catdata.id} catdata={this.props.catdata} />
          <FaTrash
            onClick={this.handleDelete}
            className="tools d-inline mb-2 ml-1"
          />
          <ul className="text-capitalize list-unstyled text-center">
            <li>Breed: {breed}</li>
            <li>sex: {sex.toLowerCase() === "m" ? "male" : "female"}</li>
            <li>age: {age}</li>
          </ul>
          <FaHeart
            catId={this.props.catdata.id}
            id="heart-icon"
            onClick={this.changeColor}
            style={{ color: this.state.iconColor }}
          />
        </div>
      </div>
    );
  }
}
