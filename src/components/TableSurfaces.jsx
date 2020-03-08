import React from "react";
import styles from "./TableSurfaces.module.scss";

const TableSurfaces = ({ key, venueName, surfaceName, status, sport }) => {
  return (
    <tr>
      <td>{venueName}</td>
      <td>{surfaceName}</td>
      <td>{status}</td>
      <td>{sport}</td>
    </tr>
  );
};

export default TableSurfaces;
