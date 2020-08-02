import {
  FETCH_JOB_LIST_REQUEST,
  FETCH_JOB_LIST_SUCCESS,
} from "./actionConstants";

function fetchJobListRequest() {
  return {
    type: FETCH_JOB_LIST_REQUEST,
  };
}

function fetchJobListSuccess(data, uri, page) {
  return {
    type: FETCH_JOB_LIST_SUCCESS,
    payload: {
      jobs: data,
      uri: uri,
      page: page,
    },
  };
}

export function fetchJobList(uri, page = 1) {
  return function (dispatch) {
    dispatch(fetchJobListRequest());
    fetchJob(uri, page).then((res) =>
      dispatch(fetchJobListSuccess(res.overallData, uri, res.page))
    );
  };
}

const baseUri = "https://cors-anywhere.herokuapp.com/";

function fetchJob(uri, page = 1) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${baseUri}${uri}page=${page}`);
    const data = await response.json();
    resolve({ overallData: data, page: page });
  });
}

// function fetchJob() {
//   return new Promise(async (resolve) => {
//     let page = 1;
//     let overallData = [];
//     while (true) {
//       let response = await fetch(
//         `${baseUri}https://jobs.github.com/positions.json?page=${page}`
//       );
//       let data = await response.json();
//       console.log(data);
//       if (data.length > 0) {
//         overallData = overallData.concat(data);
//       } else {
//         console.log(page);
//         resolve({ overallData: overallData, page: page });
//         break;
//       }
//       page += 1;
//     }
//   });
// }
