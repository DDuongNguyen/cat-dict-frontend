import React, { Component } from "react";
import Popup from "reactjs-popup";

export default class Pop extends Component {
  state = {
    name: "",
    sex: "",
    age: "",
    breed: "",
    chonk_level: "",
    image_url: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://127.0.0.1:42069/felinelist", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name:this.state.name,
        age: this.state.age,
        breed: this.state.breed,
        sex: this.state.sex,
        chonk_level: this.state.chonk_level,
        image_url: this.state.image_url
      })
    })
      .then(resp => resp.json())
      .then(data => alert(data[1].name + " just got created yall"))
      .then(window.location.reload());
  };

  render() {
    return (
      <Popup
        trigger={<button className="btn btn-primary mt-3">Add Cat</button>}
        position="top center"
        style={{ minWidth: "20vw" }}

      >
        {close => (
          <div>
            <div className="card text-white bg-primary mb-3 d-inline-block">
              <a className="close d-inline m-0 pr-2" onClick={close}>
                x
              </a>
              <div className="card-body">
                <h4 className="card-title text-capitalize">
                  Fill Out Your cat information
                </h4>

                <form onSubmit={this.handleSubmit}>
                  
                    <input
                      onChange={this.handleChange}
                      type="text"
                      className="form-control text-capitalize mb-2"
                      name="name"
                      placeholder="Name"
                    />
      
                  
                    <input
                      onChange={this.handleChange}
                      type="text"
                      className="form-control text-capitalize mb-2"
                      name="sex"
                      placeholder="Sex"
                    />
     
                    <input
                      onChange={this.handleChange}
                      type="text"
                      className="form-control text-capitalize mb-2"
                      name="breed"
                      placeholder="Breed"
                    />


                    <input
                      onChange={this.handleChange}
                      type="text"
                      className="form-control text-capitalize mb-2"
                      name="age"
                      placeholder="Age"
                    />

                    <input
                      onChange={this.handleChange}
                      type="text"
                      className="form-control text-capitalize mb-2"
                      name="chonk_level"
                      placeholder="Chonk Level"
                    />
           
                  
                    <input
                      onChange={this.handleChange}
                      type="text"
                      className="form-control text-capitalize mb-2"
                      name="image_url"
                      placeholder="Image Url or I give u a random cato"
                    />

                    <button type='submit' className='btn btn-light'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}
