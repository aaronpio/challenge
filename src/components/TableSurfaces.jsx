import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import styles from "./TableSurfaces.module.scss";

const TableSurfaces = ({ surfaces, setSelectedRow }) => {
  const [columns, setColumns] = useState([
    { dataField: "venueName", text: "" },
    { dataField: "surfaceName", text: "" },
    { dataField: "status", text: "" },
    { dataField: "sport", text: "" }
  ]);

  useEffect(() => {
    setColumns([
      {
        dataField: "venueName",
        text: "Venue Name"
      },
      {
        dataField: "surfaceName",
        text: "Surface Name"
      },
      {
        dataField: "status",
        text: "Status"
      },
      {
        dataField: "sport",
        text: "Sport"
      }
    ]);
  }, [surfaces]);

  const rowEvents = {
    onClick: (e, row) => {
      setSelectedRow(row);
    }
  };

  const selectRow = {
    mode: "radio",
    hideSelectColumn: true,
    clickToSelect: true,
    bgColor: "lightblue"
  };

  return (
    <div className={styles.table_surfaces}>
      <BootstrapTable
        bootstrap4
        hover
        bordered
        striped
        keyField="id"
        data={surfaces}
        columns={columns}
        rowEvents={rowEvents}
        selectRow={selectRow}
      />
    </div>
  );
};

export default TableSurfaces;
