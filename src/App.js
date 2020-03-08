import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar";
import TableContainer from "./components/TableContainer";
import Details from "./components/Details";

import Axios from "axios";

function App() {
  const [tab, setTab] = useState(null);

  const [surfaceData, setSurfaceData] = useState(null);
  const [serverData, setServerData] = useState(null);

  const [selectedRow, setSelectedRow] = useState(null);

  const parseServerData = data => {
    const serverList = data.map(server => server.server);

    const uniqueServerId = [];
    const uniqueServerList = serverList.filter(server => {
      if (uniqueServerId.includes(server.id)) {
        return null;
      } else {
        uniqueServerId.push(server.id);
        return server;
      }
    });
    setServerData(uniqueServerList);
  };

  const setSelectedData = () => {
    //const newObj =
  };

  useEffect(() => {
    Axios.get(
      `https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project`
    ).then(res => {
      setSurfaceData(res.data);
      setSelectedRow(res.data[1]);
      parseServerData(res.data);
    });
  }, []);

  return (
    <main className={styles.app}>
      <Sidebar setTab={setTab} />
      {tab === "Data" && (
        <>
          <TableContainer
            serverData={serverData}
            surfaceData={surfaceData}
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
          />
          <Details details={selectedRow} />
        </>
      )}
    </main>
  );
}

export default App;
