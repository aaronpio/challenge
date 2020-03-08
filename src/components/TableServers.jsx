import React, { useEffect, useState } from "react";
import styles from "./TableServers.module.scss";

import BootstrapTable from "react-bootstrap-table-next";

const TableServers = ({ servers, selectedRow }) => {
  const [columns, setColumns] = useState([
    { keyField: "id", dataField: "ip4", text: "IP4" },
    { keyField: "id", dataField: "dns", text: "DNS" }
  ]);

  useEffect(() => {
    setColumns([
      {
        keyField: "id",
        dataField: "ip4",
        text: "IP4"
      },
      {
        keyField: "id",
        dataField: "dns",
        text: "DNS"
      }
    ]);
  }, [servers]);

  const selectRow = {
    mode: "radio",
    hideSelectColumn: true,
    clickToSelect: false,
    selected: [selectedRow.server.id],
    bgColor: "lightblue"
  };

  return (
    <div className={styles.table_surfaces}>
      <BootstrapTable
        bootstrap4
        bordered
        striped
        keyField="id"
        data={servers}
        columns={columns}
        selectRow={selectRow}
      />
    </div>
  );
};

export default TableServers;
