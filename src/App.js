import React from "react";
import styles from "./App.module.scss";
import Sidebar from "./components/Sidebar";
import TableContainer from "./components/TableContainer";
import Details from "./components/Details";

function App() {
  return (
    <main className={styles.app}>
      <Sidebar />
      <TableContainer />
      <Details />
    </main>
  );
}

export default App;
