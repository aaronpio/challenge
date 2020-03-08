import React, { useEffect, useState } from "react";
import styles from "./TableServers.module.scss";
import Table from "react-bootstrap/Table";

const TableServers = ({ servers }) => {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    if (servers) {
      const serverRow = servers.map(server => {
        return (
          <tr key={server.id}>
            <td>{server.ip4}</td>
            <td>{server.dns}</td>
          </tr>
        );
      });
      setRows(serverRow);
    }
  }, [servers]);

  return (
    <div className={styles.table_servers}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>IP4</th>
            <th>DNS</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default TableServers;
