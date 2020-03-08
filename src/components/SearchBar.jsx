import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.scss";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SearchBar = ({ filterSurfaceData }) => {
  const [filter, setFilter] = useState("");

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
