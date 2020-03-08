import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import BootstrapTable from "react-bootstrap-table-next";

import styles from "./TableSurfaces.module.scss";

const TableSurfaces = ({ surfaces, selectedRow, setSelectedRow }) => {
  const [rows, setRows] = useState(null);
  //const [selected, setSelected] = useState("Surfaces");
  //const [columns, setColumns] = useState(null);

  // if (selectedRow === key) {

  // }

  useEffect(() => {
    const surfaceRow = surfaces.map((surface, index) => {
      return (
        <tr
          // className={selectedStatus}
          key={surface.id}
          onClick={() => setSelectedRow(surface)}
        >
          <td>{surface.venueName}</td>
          <td>{surface.surfaceName}</td>
          <td>{surface.status}</td>
          <td>{surface.sport}</td>
        </tr>
      );
    });
    // console.log(surfaces);

    // setColumns([
    //   {
    //     dataField: "venueName",
    //     text: "Venue Name"
    //   },
    //   {
    //     dataField: "surfaceName",
    //     text: "Surface Name"
    //   },
    //   {
    //     dataField: "status",
    //     text: "Status"
    //   },
    //   {
    //     dataField: "sport",
    //     text: "Sport"
    //   }
    // ]);

    setRows(surfaceRow);
  }, [surfaces]);

  return (
    <div className={styles.table_surfaces}>
      <Table striped bordered hover selected>
        <thead>
          <tr>
            <th>Venue Name</th>
            <th>Surface Name</th>
            <th>Status</th>
            <th>Sport</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      {/* {surfaces && (
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={surfaces}
          columns={columns}
        /> */}
      {/* )} */}
    </div>
  );
};

export default TableSurfaces;
