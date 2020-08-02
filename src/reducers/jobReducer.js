import {
  FETCH_JOB_LIST_REQUEST,
  FETCH_JOB_LIST_SUCCESS,
  FETCH_JOB_LIST_FAIL,
} from "../actions/actionConstants";

const initialState = {
  page: 1,
  jobs: [],
  errorMessage: "",
  loading: false,
  uri: "https://jobs.github.com/positions.json?",
  next: true,
  previous: true,
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOB_LIST_REQUEST:
      return { ...state, loading: true, next: true, previous: true };
    case FETCH_JOB_LIST_SUCCESS:
      return {
        ...state,
        jobs: action.payload.jobs,
        page: action.payload.page,
        uri: action.payload.uri,
        loading: false,
        next: action.payload.jobs.length !== 50,
        previous: action.payload.page <= 1,
      };
    case FETCH_JOB_LIST_FAIL:
      return {
        ...state,
        errorMessage: "Error",
        loading: false,
      };
    default:
      return state;
  }
};
