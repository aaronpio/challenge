import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.scss";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SearchBar = ({ filterSurfaceData }) => {
  //filter state changes on every text input change
  const [filter, setFilter] = useState("");

  //Calls the filterSurfaceData function everytime the text input changes - Keeps all data related states up to date to the SearchBar filter
  useEffect(() => {
    filterSurfaceData(filter);
  }, [filter]);

  return (
    <div className={styles.search_bar}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">🔎</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          name="filter"
          type="text"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
