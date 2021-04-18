import React from "react";

export default class registration extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      message: "",
      nameValid: false,
      ageValid: false
    };
  }

  validateName = (event) => {
    var name = event.target.value;
    if (name.length < 5) {
      this.setState({ name: "Invalid name", nameValid: false });
    } else {
      this.setState({ name: " ", nameValid: true });
    }
  };

  validateAge = (event) => {
    var age = event.target.value;
    if (age < 10) {
      this.setState({ age: "invalid age", ageValid: false });
    } else {
      this.setState({ age: " ", ageValid: true });
    }
  };

  displayMessage = (event) => {
    event.preventDefault();

    this.setState({ message: "submitted successfully" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.displayMessage}>
          <h4>Name : </h4>
          <input onChange={this.validateName} />
          <span>{this.state.name}</span>
          <br />
          <h4>Age : </h4>
          <input type="number" onChange={this.validateAge} />
          <span>{this.state.age}</span>
          <br />
          <button
            type="submit"
            disabled={!(this.state.ageValid && this.state.nameValid)}
          >
            Register
          </button>
          <h4>{this.state.message}</h4>
        </form>
      </>
    );
  }
}
