import React, { Component } from "react";
import Popup from "reactjs-popup";
import { FaTools } from "react-icons/fa";

export default class Pop extends Component {
  state = {
    name: this.props.catdata.name,
    sex: this.props.catdata.sex,
    age: this.props.catdata.age,
    breed: this.props.catdata.breed,
    chonk_level: this.props.catdata.chonk_level,
    image_url: this.props.catdata.image_url
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    let catId = this.props.catId;
    fetch(`http://127.0.0.1:42069/feline/${catId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        age: this.state.age,
        breed: this.state.breed,
        sex: this.state.sex,
        chonk_level: this.state.chonk_level,
        image_url: this.state.image_url
      })
    })
      .then(resp => resp.json())
      .then(data => {
        alert("yo u just changed yo stuff");
      })
      .then(window.location.reload());
  };

  render() {
    return (
      <Popup
        trigger={open => (
          <button style={{ border: "none" }}>
            <FaTools className="tools d-inline mb-2 mr-1" />
          </button>
        )}
        position="top center"
        closeOnDocumentClick
      >
        <div>
          <div className="card text-white bg-primary mb-3 d-inline-block">
            <div className="card-body">
              <h4 className="card-title text-capitalize">
                Update Out Your cat information
              </h4>

              <form onSubmit={this.handleSubmit}>
                <input
                  value={this.state.name}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control text-capitalize mb-2"
                  name="name"
                  placeholder="Name"
                />

                <input
                  value={this.state.sex}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control text-capitalize mb-2"
                  name="sex"
                  placeholder="Sex"
                />

                <input
                  value={this.state.breed}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control text-capitalize mb-2"
                  name="breed"
                  placeholder="Breed"
                />

                <input
                  value={this.state.age}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control text-capitalize mb-2"
                  name="age"
                  placeholder="Age"
                />

                <input
                  value={this.state.chonk_level}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control text-capitalize mb-2"
                  name="chonk_level"
                  placeholder="Chonk Level"
                />

                <input
                  value={this.state.image_url}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control text-capitalize mb-2"
                  name="image_url"
                  placeholder="Image Url or I give u a random cato"
                />

                <button type="submit" className="btn btn-light">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Popup>
    );
  }
}
