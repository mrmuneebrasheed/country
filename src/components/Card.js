import React from "react";
class Card extends React.Component {
  render() {
    return (
      <div key={Math.random()} className="bg-inf col-4 mx-2 my-4">
        <img
          className="border"
          alt="flag"
          src={this.props.flag}
          width="100%"
          height="150px"
        ></img>
        <div className="bg-light my-2 p-2">
          <span className="h3">Name: </span>
          <span className="h4">{this.props.name}</span>
        </div>
        <div className="bg-light my-2 p-2">
          <span className="h4">Capital: </span>
          <span className="h5">{this.props.capital}</span>
        </div>
        <div className="bg-light my-2 p-2">
          <span className="h4">Population: </span>
          <span className="h5">{this.props.population}</span>
        </div>
        <div className="bg-light my-2 p-2">
          <span className="h4">Region: </span>
          <span className="h5">{this.props.region}</span>
        </div>
      </div>
    );
  }
}
export default Card;
