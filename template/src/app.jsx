import React, { Component } from "react";

class App extends Component {
  state = {
    dog: [],
  };

  search = (result) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://dog.ceo/api/breed/hound/images", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.state.dog.push(result.message[10]);
        console.log(this.state.dog);
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <button className="hi" onClick={this.search}>
        hi
      </button>
    );
  }
}

export default App;
