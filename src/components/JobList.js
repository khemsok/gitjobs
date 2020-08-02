import React, { useEffect } from "react";

import Job from "./Job";

// Redux
import { connect } from "react-redux";
import { fetchJobList } from "../actions/jobActions";

// MUI
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

function JobList(props) {
  useEffect(() => {
    const firstPage = "https://jobs.github.com/positions.json?";
    props.fetchJobList(firstPage, 1);
  }, []);

  const displayInfo = props.loading ? (
    // <h1>Loading...</h1>
    <LinearProgress color="primary" />
  ) : props.jobs.length !== 0 ? (
    <>
      {props.jobs.map((el, index) => (
        <Job data={el} key={index} key={el.id} />
      ))}
    </>
  ) : (
    <Typography variant="h6">No Jobs Found...</Typography>
  );
  return <div style={{ marginTop: "25px" }}>{displayInfo}</div>;
}

const mapStateToProps = (state) => {
  return {
    page: state.jobList.page,
    jobs: state.jobList.jobs,
    loading: state.jobList.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobList: (uri, page) => dispatch(fetchJobList(uri, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
