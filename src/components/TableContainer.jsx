import React, { useState } from "react";
import styles from "./TableContainer.module.scss";
import TableSurfaces from "./TableSurfaces";
import TableServers from "./TableServers";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const TableContainer = ({ surfaceData, serverData,  selectedRow, setSelectedRow }) => {
  const [key, setKey] = useState("Surfaces");

  return (
    <div className={styles.table_container}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
      >
        <Tab eventKey="Surfaces" title="Surfaces">
          <TableSurfaces
            surfaces={surfaceData}
            setSelectedRow={setSelectedRow}
          />
        </Tab>
        <Tab eventKey="Servers" title="Servers">
          <TableServers servers={serverData} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TableContainer;
