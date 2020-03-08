import React from "react";
import styles from "./Details.module.scss";

const Details = ({ details }) => {
  console.log(details);
  return (
    <div className={styles.detail_tab}>
      <h4>Detail</h4>
      <h6>Venue Name:</h6>
      <h5>{details.venueName}</h5>
      <h6>Surface Name:</h6>
      <h5>{details.surfaceName}</h5>
      <h6>Status:</h6>
      <h5>{details.status}</h5>
      <h6>Sport:</h6>
      <h5>{details.sport}</h5>
      <h6>Server IP:</h6>
      <h5>{details.server.ip4}</h5>
    </div>
  );
};

export default Details;
