import { FETCH_JOB_LIST } from "../actions/actionConstants";

const initialState = {
  page: -1,
  jobs: [],
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOB_LIST:
      return { ...state, jobs: action.payload.jobs, page: action.payload.page };
    default:
      return state;
  }
};
