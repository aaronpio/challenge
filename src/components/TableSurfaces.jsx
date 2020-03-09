import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import styles from "./TableSurfaces.module.scss";

const TableSurfaces = ({ surfaces, selectedRow, setSelectedRow }) => {
  //const [selectRow, setSelectRow] = useState(null);

  const [columns, setColumns] = useState([
    { keyField: "id", dataField: "venueName", text: "Venue Name" },
    { dataField: "surfaceName", text: "Surface Name" },
    { dataField: "status", text: "Status" },
    { dataField: "sport", text: "Sport" }
  ]);

  //Updates the table as the surfaces data state changes based on the text input filter
  useEffect(() => {
    setColumns([
      {
        keyField: "id",
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

  //Sets the selected row state
  const rowEvents = {
    onClick: (e, row) => {
      setSelectedRow(row);
    }
  };

  //Establishes table behaviour of selecting a row
  const selectRow = {
    mode: "radio",
    hideSelectColumn: true,
    selected: [selectedRow.id],
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
