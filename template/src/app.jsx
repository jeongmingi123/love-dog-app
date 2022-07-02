import React, { Component } from "react";
import DogList from "./dog_list/dog_list";
import Navbar from "./navbar/navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <DogList dogUrls={this.props.dogUrls} />
      </>
    );
  }
}

export default App;
