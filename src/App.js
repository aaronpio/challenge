import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar";
import TableContainer from "./components/TableContainer";
import Details from "./components/Details";
import SearchBar from "./components/SearchBar";

import Axios from "axios";

function App() {
  const [tab, setTab] = useState(null);

  const [filteredData, setFilteredData] = useState(null);
  const [surfaceData, setSurfaceData] = useState(null);
  const [serverData, setServerData] = useState(null);

  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    Axios.get(
      `https://2hsjstzo71.execute-api.us-east-1.amazonaws.com/prod/livebarn-interview-project`
    ).then(res => {
      setSurfaceData(res.data);
      setFilteredData(res.data);
      setSelectedRow(res.data[0]);
      parseServerData(res.data);
    });
  }, []);

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

  const filterSurfaceData = filter => {
    const newFilteredData = surfaceData.filter(surface => {
      if (
        surface.venueName.includes(filter) ||
        surface.surfaceName.includes(filter)
      ) {
        return surface;
      }
    });
    parseServerData(newFilteredData);
    setFilteredData(newFilteredData);
    setSelectedRow(newFilteredData[0]);
  };

  return (
    <main className={styles.app}>
      <Sidebar setTab={setTab} />
      {tab === "Data" ? (
        <>
          <div className={styles.main_container}>
            <SearchBar filterSurfaceData={filterSurfaceData} />
            <TableContainer
              serverData={serverData}
              surfaceData={filteredData}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
            />
            <h5>Matched: {filteredData.length}</h5>
          </div>

          <Details details={selectedRow} />
        </>
      ) : (
        <h4 className={styles.empty}>Empty Tab</h4>
      )}
    </main>
  );
}

export default App;
