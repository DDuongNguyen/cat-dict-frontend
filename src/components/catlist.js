import React, { Component } from "react";
import Cat from "./cat.js";
import Pop from './pop-up'

export default class Catlist extends Component {
  generateCat = () => {
    if(this.props.data.length>1){
        let cats= this.props.data
        return cats.map(cat => {return <Cat catdata={cat}/>})
    }
  };

  render() {
      
    return (
      <div style={{ height: "85vh", width: "100vw", backgroundColor: "white" }}>
        <div className="col-12 row no-gutters m-auto">{this.generateCat()}</div>
        <Pop />
      </div>
    );
  }
}
