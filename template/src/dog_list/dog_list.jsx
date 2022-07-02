import React, { Component } from "react";
import DogItem from "../dog_item/dog_item";
import styles from "./dog_list.module.css";
class DogList extends Component {
  render() {
    return (
      <>
        <div>
          <ul className={styles.dogs}>
            {this.props.dogUrls.map((dogUrl) => (
              <DogItem dogItem={dogUrl} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default DogList;
