import React, { useState, useEffect } from "react";
import styles from "./TableContainer.module.scss";
//import TableSurfaces from "./TableSurfaces";
import TableServers from "./TableServers";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";

import Axios from "axios";

const TableContainer = () => {
  const [key, setKey] = useState("Surfaces");
  const [surfaces, setSurfaces] = useState(null);
  const [servers, setServers] = useState(null);
  const [selectedSurface, setSelectedSurface] = useState(null);
  const [rows, setRows] = useState(null);

  useEffect(() => {
    Axios.get(
      `https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project`
    ).then(res => {
      setSurfaces(res.data);
      setRows(
        res.data.map(surface => {
          return (
            <tr>
              <td>{surface.venueName}</td>
              <td>{surface.surfaceName}</td>
              <td>{surface.status}</td>
              <td>{surface.sport}</td>
            </tr>
          );
        })
      );
    });
  }, []);

  return (
    <div className={styles.table_container}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
      >
        <Tab eventKey="Surfaces" title="Surfaces">
          <div className={styles.table_surfaces}>
            <Table striped bordered hover>
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
          </div>
        </Tab>
        <Tab eventKey="Servers" title="Servers">
          <TableServers />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TableContainer;
