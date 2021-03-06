import React from "react";
import styles from "./Sidebar.module.scss";
import Button from "react-bootstrap/Button";

const Sidebar = ({ setTab }) => {

//Buttons set the tab state to 'Data' or null
  return (
    <aside className={styles.sidebar}>
      <Button onClick={() => setTab(null)} variant="outline-primary">
        Empty
      </Button>
      <Button onClick={() => setTab("Data")} variant="outline-primary">
        Data
      </Button>
    </aside>
  );
};

export default Sidebar;
