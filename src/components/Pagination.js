import React, { useState, useEffect } from "react";

import { fetchJobList } from "../actions/jobActions";

// Redux
import { connect } from "react-redux";

// MUI
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

// Icons
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

function Pagination(props) {
  const handleNext = () => {
    props.fetchJobList(props.uri, props.page + 1);
  };

  const handlePrevious = () => {
    props.fetchJobList(props.uri, props.page - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tooltip title="Previous Page">
        <IconButton disabled={props.previous} onClick={handlePrevious}>
          <ArrowLeftIcon />
        </IconButton>
      </Tooltip>
      <Typography variant="body2" style={{ margin: "0 10px" }}>
        {props.page}
      </Typography>
      <Tooltip title="Next Page">
        <IconButton disabled={props.next} onClick={handleNext}>
          <ArrowRightIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    uri: state.jobList.uri,
    page: state.jobList.page,
    jobLenght: state.jobList.jobs.length,
    next: state.jobList.next,
    previous: state.jobList.previous,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobList: (uri, page) => dispatch(fetchJobList(uri, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
