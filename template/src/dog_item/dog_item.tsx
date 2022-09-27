import React, { Component } from "react";
import styles from "./dog_item.module.css";

class DogItem extends Component {
  render() {
    return (
      <>
        <li className={styles.container}>
          <div className={styles.item}>
            <img src={this.props.dogItem} className={styles.image} alt="dog" />
          </div>
          <div className={styles.text}>
            <p>Pretty Dog</p>
            <p>Hello</p>
          </div>
        </li>
      </>
    );
  }
}

export default DogItem;
