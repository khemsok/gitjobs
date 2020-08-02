import React, { useState } from "react";

import { connect, useDispatch } from "react-redux";

import { fetchJobList } from "../actions/jobActions";

import JobList from "./JobList";
import Pagination from "./Pagination";

// MUI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

function SearchJobs(props) {
  const initialState = {
    searchJob: "",
    searchLocation: "",
  };
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const handleTextChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const handleClear = () => {
    setState(initialState);
  };

  const handleSearch = () => {
    const description =
      state.searchJob.length === 0 ? "" : `description=${state.searchJob}`;
    const location =
      state.searchLocation.length === 0
        ? ""
        : `location=${state.searchLocation}`;
    const ampersand1 =
      (state.searchLocation.length !== 0) & (state.searchJob.length !== 0)
        ? "&"
        : "";
    const ampersand2 =
      (state.searchLocation.length === 0) & (state.searchJob.length === 0)
        ? ""
        : "&";
    const uri = `https://jobs.github.com/positions.json?${description}${ampersand1}${location}${ampersand2}`;
    dispatch(fetchJobList(uri));
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <TextField
        fullWidth
        variant="outlined"
        name="searchJob"
        placeholder="eg. Python Developer"
        onChange={handleTextChange}
        style={{ marginBottom: "10px" }}
        value={state.searchJob}
      />
      <TextField
        fullWidth
        variant="outlined"
        name="searchLocation"
        placeholder="eg. Philadelphia"
        onChange={handleTextChange}
        value={state.searchLocation}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={handleSearch}
        >
          Search
        </Button>
        <div style={{ margin: "0 10px" }} />
        <Button
          fullWidth
          color="secondary"
          variant="contained"
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
      <Pagination />
      <JobList />
    </Container>
  );
}

export default connect()(SearchJobs);
