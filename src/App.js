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

  //API request for data, then sets initial states with result
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

  //Parses through all server keys on object, then removes duplicates, and sets the serverData state
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

  //Used in the Search bar component. Takes the text input from SearchBar and filters out surface objects who's venue/surface names do not match the text input.
  //This filtered list is used to update all states for server/surface data objects
  const filterSurfaceData = filter => {
    const newFilteredData = surfaceData.filter(surface => {
      if (
        surface.venueName.includes(filter) ||
        surface.surfaceName.includes(filter)
      ) {
        return surface;
      } else {
        return null;
      }
    });
    parseServerData(newFilteredData);
    setFilteredData(newFilteredData);
    if (newFilteredData.length > 0) setSelectedRow(newFilteredData[0]);
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
            <h5>Surfaces Matched: {filteredData.length}</h5>
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
